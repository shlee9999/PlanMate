import { FC, useState } from 'react'
import * as s from './styled'
import { weekDays } from 'constants/week'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import { CalendarHeader, DateContainer } from './components'

type CalendarProps = {
  className?: string
  selectedDateProps: DateProps
  setSelectedDate: (date: DateProps) => void
  dataSource?: ResponseStats[]
  blockFuture?: boolean
  legend?: boolean
  headerButtonLayout?: 'space-between' | 'center'
  todayButton?: boolean
  yearHeader?: boolean
}

export const Calendar: FC<CalendarProps> = ({
  className,
  setSelectedDate,
  selectedDateProps,
  dataSource = [],
  blockFuture = false,
  legend,
  headerButtonLayout = 'space-between',
  todayButton = false,
  yearHeader = false,
}) => {
  const [back, setBack] = useState(false) //* 애니메이션 좌우 설정
  return (
    <s.Calendar className={className}>
      <CalendarHeader
        yearHeader={yearHeader}
        todayButton={todayButton}
        selectedDateProps={selectedDateProps}
        headerButtonLayout={headerButtonLayout}
        blockFuture={blockFuture}
        setSelectedDate={setSelectedDate}
        setBack={setBack}
      />
      <s.Body>
        <s.DayRow>
          {weekDays.map((day, index) => (
            <s.DayCell key={index}>{day}</s.DayCell>
          ))}
          <s.Line />
        </s.DayRow>
        <DateContainer
          setSelectedDate={setSelectedDate}
          selectedDateProps={selectedDateProps}
          blockFuture={blockFuture}
          dataSource={dataSource}
          back={back}
          legend={legend}
          setBack={setBack}
        />
      </s.Body>
    </s.Calendar>
  )
}
