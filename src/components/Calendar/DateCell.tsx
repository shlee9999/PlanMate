import { FC, useRef, useState } from 'react'
import { DateProps } from 'pages/Stats/StatsPage'
import { dateUtils } from 'utils'
import * as s from './styled'
type DateCellProps = {
  cellDate: Date
  selectedDate: DateProps
  studyTimeHours?: number
  setSelectedDate: () => void
  blockFuture: boolean
}

function getIndex(hour: number) {
  if (hour <= 3) return 0
  if (hour <= 7) return 1
  if (hour <= 11) return 2
  return 3
}

const getClassName = (cellDate: DateProps, selectedDate: DateProps) => {
  if (cellDate.month !== selectedDate.month) {
    if (selectedDate.month === 0 && cellDate.month === 11) return 'prev'
    else if (selectedDate.month === 11 && cellDate.month === 0) return 'next'
    return cellDate.month < selectedDate.month ? 'prev' : 'next'
  }
  return 'current'
}

export const DateCell: FC<DateCellProps> = ({
  setSelectedDate,
  cellDate,
  selectedDate,
  studyTimeHours = 0,
  blockFuture,
}) => {
  const cellDateProps = dateUtils.getDateProps(cellDate)
  const [isToolTipOpen, setIsToolTipOpen] = useState(false)
  const triggerTooltip = () => setIsToolTipOpen(true)
  const closeTooltip = () => setIsToolTipOpen(false)
  const className = getClassName(cellDateProps, selectedDate)
  const isSelected = dateUtils.isEqual(cellDateProps, selectedDate)
  const opacity = getIndex(studyTimeHours)
  const onClick = () => {
    if (blockFuture) {
      if (dateUtils.isFuture(cellDate)) triggerTooltip()
      else setSelectedDate()
    } else {
      setSelectedDate()
    }
  }
  const ref = useRef()
  return (
    <s.DateCellWrapper>
      <s.DateCellRoot className={className} $isSelected={isSelected} onClick={onClick} $index={opacity} ref={ref}>
        {cellDateProps.date}
      </s.DateCellRoot>
      {isToolTipOpen && <s.StyledTooltip closeTooltip={closeTooltip} targetRef={ref} />}
    </s.DateCellWrapper>
  )
}