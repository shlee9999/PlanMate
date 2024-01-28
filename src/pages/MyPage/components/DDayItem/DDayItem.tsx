import { FC, useContext } from 'react'
import { dateUtils } from 'utils'
import { ThemeContext } from 'styled-components'
import { useFixDdayMutation } from 'pages/MyPage/hooks'
import * as s from './styled'

type DDayItemProps = {
  scheduleId: number
  title: string
  targetDate: string
  isFixed: boolean
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  selectable: boolean
  className?: string
}

export const DDayItem: FC<DDayItemProps> = ({
  className,
  title,
  targetDate,
  isFixed,
  scheduleId,
  isSelected,
  onClick,
  selectable,
}) => {
  const mutateFixSchedule = useFixDdayMutation()
  const onClickPin = (e: React.MouseEvent) => {
    e.stopPropagation()
    mutateFixSchedule({ dDayId: scheduleId })
  }
  const dDay = dateUtils.daysUntil(targetDate)
  const getWeekDay = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    const split = targetDate.split('-')
    const date = new Date(+split[0], +split[1] - 1, +split[2])
    return '(' + days[date.getDay()] + ')'
  }
  if (dDay < 0) return null
  return (
    <s.Root
      onClick={onClick}
      className={className + ' ' + (isFixed ? 'isFixed' : '')}
      $isSelected={isSelected}
      $selectable={selectable}
    >
      <s.Container>
        <s.StyledPinIcon onClick={onClickPin} $isFixed={isFixed} />
        <s.Title>{title}</s.Title>
        <s.Date>{targetDate.replaceAll('-', '. ') + ' ' + getWeekDay()}</s.Date>
      </s.Container>
      <s.DDay>{dDay}</s.DDay>
    </s.Root>
  )
}
