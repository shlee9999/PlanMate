import { Dispatch, SetStateAction, memo } from 'react'
import * as s from './styled'
import { DateCell } from './DateCell/DateCell'
import { dateUtils } from 'utils'
import { ResponseStats } from 'api/types'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type WeekRowProps = {
  week: number
  blockFuture: boolean
  studyTimeHours?: number
  setBack: Dispatch<SetStateAction<boolean>>
  dataSource: ResponseStats[]
}

export const WeekRow = memo(({ week, blockFuture, setBack, dataSource }: WeekRowProps) => {
  const selectedDateProps = useSelector(
    (state: RootState) => state.selectedDate,
    (prev, next) => prev.year === next.year && prev.month === next.month
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
        />
      ))}
    </s.WeekRow>
  )
})
WeekRow.displayName = 'WeekRow'
