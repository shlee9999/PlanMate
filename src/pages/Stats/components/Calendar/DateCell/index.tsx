import { FC } from 'react'
import { Root } from './styled'
import { DateProps } from 'pages/Stats'

type DateCellProps = {
  onClick: (e: React.MouseEvent) => void
  cellDate: DateProps
  selectedDate: DateProps
  studyTimeHours?: number
}

function isEqualDate(a: DateProps, b: DateProps) {
  return a.year === b.year && a.month === b.month && a.date === b.date
}

function getIndex(hour: number) {
  if (hour <= 3) return 0
  if (hour <= 7) return 1
  if (hour <= 11) return 2
  return 3
}

const getClassName = (cellDate, selectedDate) => {
  if (cellDate.month !== selectedDate.month) {
    if (selectedDate.month === 0 && cellDate.month === 11) return 'prev'
    else if (selectedDate.month === 11 && cellDate.month === 0) return 'next'
    return cellDate.month < selectedDate.month ? 'prev' : 'next'
  }
  return 'current'
}

export const DateCell: FC<DateCellProps> = ({ onClick, cellDate, selectedDate, studyTimeHours }) => {
  const className = getClassName(cellDate, selectedDate)
  const isSelected = isEqualDate(cellDate, selectedDate)
  const opacity = getIndex(studyTimeHours)

  return (
    <Root className={className} $isSelected={isSelected} onClick={onClick} $index={opacity}>
      {cellDate.date}
    </Root>
  )
}
