import { FC, useState } from 'react'
import * as s from './styled'
import { weekDays } from 'constants/week'
import { CalendarHeader, DateContainer } from './components'
import { useSelectedData } from 'pages/Stats/hooks/useSelectedData'

type CalendarProps = {
  className?: string
  blockFuture?: boolean
  legend?: boolean
  headerButtonLayout?: 'space-between' | 'center'
  todayButton?: boolean
  yearHeader?: boolean
}

export const Calendar: FC<CalendarProps> = ({
  className,
  blockFuture = false,
  legend,
  headerButtonLayout = 'space-between',
  todayButton = false,
  yearHeader = false,
}) => {
  const [back, setBack] = useState(false) //* 애니메이션 좌우 설정
  const { selectedMonthStats } = useSelectedData()
  return (
    <s.Calendar className={className}>
      <CalendarHeader
        yearHeader={yearHeader}
        todayButton={todayButton}
        headerButtonLayout={headerButtonLayout}
        blockFuture={blockFuture}
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
          blockFuture={blockFuture}
          dataSource={selectedMonthStats}
          back={back}
          legend={legend}
          setBack={setBack}
        />
      </s.Body>
    </s.Calendar>
  )
}
