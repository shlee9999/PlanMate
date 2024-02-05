import * as s from './styled'
import { useRef, memo, SetStateAction, Dispatch } from 'react'
import { DateProps } from 'types'
import { dateUtils } from 'utils'
import { useModal } from 'hooks'
import { useDispatch } from 'react-redux'
import { updateSelectedDate } from 'modules/selectedDate'

type DateCellProps = {
  cellDateProps: DateProps
  studyTimeHours?: number
  blockFuture: boolean
  setBack: Dispatch<SetStateAction<boolean>>
  className: string
  isSelected: boolean
}

function getIndex(hour: number) {
  if (hour <= 3) return 0
  if (hour <= 7) return 1
  if (hour <= 11) return 2
  return 3
}

export const DateCell = memo(
  ({ cellDateProps, studyTimeHours = 0, blockFuture, setBack, className, isSelected }: DateCellProps) => {
    const dispatch = useDispatch()
    const { isOpen: isToolTipOpen, openModal: triggerTooltip, closeModal: closeTooltip } = useModal()
    const opacity = getIndex(studyTimeHours)
    const onClick = () => {
      if (className === 'prev') setBack(true)
      if (blockFuture && dateUtils.isFuture(cellDateProps)) triggerTooltip()
      else dispatch(updateSelectedDate(cellDateProps))
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
