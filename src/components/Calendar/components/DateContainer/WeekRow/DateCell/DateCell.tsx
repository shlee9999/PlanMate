import * as s from './styled'
import { useRef, useState, memo, SetStateAction, Dispatch } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import React from 'react'
import { useModal } from 'hooks'

type DateCellProps = {
  cellDateProps: DateProps
  selectedDateProps: DateProps
  studyTimeHours?: number
  setSelectedDateProps: () => void
  blockFuture: boolean
  setBack: Dispatch<SetStateAction<boolean>>
}

function getIndex(hour: number) {
  if (hour <= 3) return 0
  if (hour <= 7) return 1
  if (hour <= 11) return 2
  return 3
}

const getClassName = (cellDateProps: DateProps, selectedDateProps: DateProps) => {
  if (cellDateProps.month !== selectedDateProps.month) {
    if (selectedDateProps.month === 1 && cellDateProps.month === 12) return 'prev'
    else if (selectedDateProps.month === 12 && cellDateProps.month === 1) return 'next'
    return cellDateProps.month < selectedDateProps.month ? 'prev' : 'next'
  }
  return 'current'
}

export const DateCell = memo(
  ({
    setSelectedDateProps,
    cellDateProps,
    selectedDateProps,
    studyTimeHours = 0,
    blockFuture,
    setBack,
  }: DateCellProps) => {
    const { isOpen: isToolTipOpen, openModal: triggerTooltip, closeModal: closeTooltip } = useModal()
    const className = getClassName(cellDateProps, selectedDateProps)
    const isSelected = dateUtils.isEqual(cellDateProps, selectedDateProps)
    const opacity = getIndex(studyTimeHours)
    const onClick = () => {
      if (className === 'prev') setBack(true)
      if (blockFuture && dateUtils.isFuture(cellDateProps)) triggerTooltip()
      else setSelectedDateProps()
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
