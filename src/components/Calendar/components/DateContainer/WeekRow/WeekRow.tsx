import { Dispatch, FC, SetStateAction, useCallback } from 'react'
import * as s from './styled'
import { DateCell } from './DateCell/DateCell'
import { dateUtils } from 'utils'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'

type WeekRowProps = {
  week: number
  selectedDateProps: DateProps
  blockFuture: boolean
  studyTimeHours?: number
  setSelectedDateProps: Dispatch<SetStateAction<DateProps>>
  setBack: Dispatch<SetStateAction<boolean>>
  dataSource: ResponseStats[]
}

const getClassName = (cellDateProps: DateProps, selectedDateProps: DateProps) => {
  if (cellDateProps.month !== selectedDateProps.month) {
    if (selectedDateProps.month === 1 && cellDateProps.month === 12) return 'prev'
    else if (selectedDateProps.month === 12 && cellDateProps.month === 1) return 'next'
    return cellDateProps.month < selectedDateProps.month ? 'prev' : 'next'
  }
  return 'current'
}
export const WeekRow: FC<WeekRowProps> = ({
  week,
  selectedDateProps,
  blockFuture,
  setSelectedDateProps,
  setBack,
  dataSource,
}) => {
  const handleSelectedDateProps = useCallback(
    (cellDate: DateProps) => () => {
      setSelectedDateProps(cellDate)
    },
    []
  )
  return (
    <s.WeekRow>
      {dateUtils.getWeekDates({ ...selectedDateProps, date: week * 7 + 1 }).map((cellDateProps) => (
        <DateCell
          key={cellDateProps.date}
          cellDateProps={cellDateProps}
          studyTimeHours={
            cellDateProps.date - 1 < dataSource.length ? dataSource[cellDateProps.date - 1].totalStudyTimeHours : 0
          }
          blockFuture={blockFuture}
          setBack={setBack}
          setSelectedDateProps={handleSelectedDateProps(cellDateProps)}
          className={getClassName(cellDateProps, selectedDateProps)}
          isSelected={dateUtils.isEqual(cellDateProps, selectedDateProps)}
        />
      ))}
    </s.WeekRow>
  )
}
