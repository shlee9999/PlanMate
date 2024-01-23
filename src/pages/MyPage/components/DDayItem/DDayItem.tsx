import { FC, useContext } from 'react'
import { dateUtils } from 'utils'
import { ThemeContext } from 'styled-components'
import * as s from './styled'
import useFixScheduleMutation from 'pages/MyPage/hooks/useFixScheduleMutation'

type DDayItemProps = {
  scheduleId: number
  title: string
  targetDate: string
  isFixed: boolean
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  selectable: boolean
}

export const DDayItem: FC<DDayItemProps> = ({
  title,
  targetDate,
  isFixed,
  scheduleId,
  isSelected,
  onClick,
  selectable,
}) => {
  const theme = useContext(ThemeContext)

  const mutateFixSchedule = useFixScheduleMutation()
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
    <s.Root onClick={onClick} className={isFixed ? 'isFixed' : ''} $isSelected={isSelected} $selectable={selectable}>
      <s.LeftContainer>
        <s.StyledPinIcon fill={isFixed ? theme.primary.default : 'none'} onClick={onClickPin} />
        <s.Title>{title}</s.Title>
        <s.Date>{targetDate.replaceAll('-', '. ') + ' ' + getWeekDay()}</s.Date>
      </s.LeftContainer>
      <s.DDay>{dDay}</s.DDay>
    </s.Root>
  )
}
