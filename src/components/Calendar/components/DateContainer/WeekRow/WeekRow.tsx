import { Dispatch, FC, SetStateAction } from 'react'
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

export const WeekRow: FC<WeekRowProps> = ({
  week,
  selectedDateProps,
  blockFuture,
  setSelectedDateProps,
  setBack,
  dataSource,
}) => {
  return (
    <s.WeekRow>
      {dateUtils.getWeekDates({ ...selectedDateProps, date: week * 7 + 1 }).map((date, index) => (
        <DateCell
          key={index}
          setSelectedDate={() => setSelectedDateProps(date)}
          cellDateProps={date}
          studyTimeHours={date.date - 1 < dataSource.length ? dataSource[date.date - 1].totalStudyTimeHours : 0}
          selectedDateProps={selectedDateProps}
          blockFuture={blockFuture}
          setBack={setBack}
        />
      ))}
    </s.WeekRow>
  )
}
