import * as s from './styled'
import { FC } from 'react'
import { dateUtils } from 'utils'
import { useFixDdayMutation } from 'pages/MyPage/hooks'
import { weekDays } from 'constants/week'

type DDayItemProps = {
  scheduleId: number
  title: string
  targetDate: string
  isFixed: boolean
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  selectable: boolean
  className?: string
  remainingDays: number
}

export const DdayItem: FC<DDayItemProps> = ({
  className,
  title,
  targetDate,
  isFixed,
  scheduleId,
  isSelected,
  onClick,
  selectable,
  remainingDays,
}) => {
  const targetDateProps = dateUtils.getDateProps(targetDate)
  const mutateFixSchedule = useFixDdayMutation()
  const onClickPin = (e: React.MouseEvent) => {
    e.stopPropagation()
    mutateFixSchedule({ dDayId: scheduleId })
  }
  if (remainingDays < 0) return null
  return (
    <s.DdayItem
      onClick={onClick}
      className={className + ' ' + (isFixed ? 'isFixed' : '')}
      $isSelected={isSelected}
      $selectable={selectable}
    >
      <s.Container>
        <s.Title>{title}</s.Title>
        <s.Date>{targetDate.replaceAll('-', '. ') + ' (' + weekDays[dateUtils.getDay(targetDateProps)] + ')'}</s.Date>
      </s.Container>
      <s.StyledPinIcon onClick={onClickPin} $isFixed={isFixed} />
      <s.RemainingDays>{remainingDays}</s.RemainingDays>
    </s.DdayItem>
  )
}
