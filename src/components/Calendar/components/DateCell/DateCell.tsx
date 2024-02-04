import * as s from './styled'
import { useRef, useState, memo } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import React from 'react'
type DateCellProps = {
  cellDateProps: DateProps
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
    if (selectedDate.month === 1 && cellDate.month === 12) return 'prev'
    else if (selectedDate.month === 12 && cellDate.month === 1) return 'next'
    return cellDate.month < selectedDate.month ? 'prev' : 'next'
  }
  return 'current'
}

export const DateCell = memo(
  ({ setSelectedDate, cellDateProps, selectedDate, studyTimeHours = 0, blockFuture }: DateCellProps) => {
    const [isToolTipOpen, setIsToolTipOpen] = useState(false)
    const triggerTooltip = () => setIsToolTipOpen(true)
    const closeTooltip = () => setIsToolTipOpen(false)
    const className = getClassName(cellDateProps, selectedDate)
    const isSelected = dateUtils.isEqual(cellDateProps, selectedDate)
    const opacity = getIndex(studyTimeHours)
    const onClick = () => {
      if (blockFuture && dateUtils.isFuture(cellDateProps)) triggerTooltip()
      else setSelectedDate()
    }
    const isToday = dateUtils.isToday(cellDateProps)
    const ref = useRef()
    return (
      <s.DateCellWrapper>
        <s.DateCell
          className={className + ' ' + (isToday ? 'today' : '')}
          $isSelected={isSelected}
          onClick={onClick}
          $index={opacity}
          ref={ref}
        >
          {cellDateProps.date}
        </s.DateCell>
        {isToolTipOpen && <s.StyledTooltip closeTooltip={closeTooltip} targetRef={ref} />}
      </s.DateCellWrapper>
    )
  }
)
DateCell.displayName = 'DateCell'
