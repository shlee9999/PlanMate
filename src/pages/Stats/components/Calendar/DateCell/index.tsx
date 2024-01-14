import { FC } from 'react'
import { Root } from './styled'
import { DateProps } from 'pages/Stats'
import { TimeProps } from '../../InfoContainer/component/TimerContainer/TimerContainer'
import { timeToSecond } from 'utils/helper'

type DateCellProps = {
  isCurrentMonth: boolean
  onClick: (e: React.MouseEvent) => void
  cellDate: DateProps
  selectedDate: DateProps
  studyTime?: TimeProps
}
function isEqualDate(a: DateProps, b: DateProps) {
  if (a.year === b.year && a.month === b.month && a.date === b.date) return true
  return false
}
function getIndex(studyTime) {
  if (studyTime <= 3) return 0
  if (studyTime <= 7) return 1
  if (studyTime <= 11) return 2
  return 3
}

export const DateCell: FC<DateCellProps> = ({
  onClick,
  cellDate,
  selectedDate,
  studyTime = { hour: 0, minute: 0, second: 0 },
}) => {
  const opacity = getIndex(studyTime?.hour)
  console.log(studyTime?.hour)
  if (selectedDate.month === 0 && cellDate.month === 11) {
    // 회색
    return (
      <Root className="prev" $isSelected={isEqualDate(cellDate, selectedDate)} onClick={onClick}>
        {cellDate.date}
      </Root>
    )
  } else if (selectedDate.month === 11 && cellDate.month === 0) {
    // 안보임
    return (
      <Root className="next" $isSelected={isEqualDate(cellDate, selectedDate)} onClick={onClick}>
        {cellDate.date}
      </Root>
    )
  } else if (cellDate.month < selectedDate.month) {
    return (
      <Root className="prev" $isSelected={isEqualDate(cellDate, selectedDate)} onClick={onClick}>
        {cellDate.date}
      </Root>
    )
  } else if (cellDate.month > selectedDate.month) {
    return (
      <Root className="next" $isSelected={isEqualDate(cellDate, selectedDate)} onClick={onClick}>
        {cellDate.date}
      </Root>
    )
  }

  //   잘보임
  return (
    <Root className="current" $isSelected={isEqualDate(cellDate, selectedDate)} onClick={onClick} $index={opacity}>
      {cellDate.date}
    </Root>
  )
}
