import { FC, SetStateAction } from 'react'
import * as s from './styled'
import { weekDays } from 'constants/week'
import { dateUtils } from 'utils'
import { AnimatePresence, Variants } from 'framer-motion'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import { useCalendar } from './useCalendar'
import { DateCell, DateContainer } from './components'

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
  const { back, onClickNextMonth, onClickPrevMonth, onClickNextYear, onClickPrevYear, onClickToday, todayDateProps } =
    useCalendar({
      setSelectedDate,
      selectedDateProps,
      dataSource,
      blockFuture,
      legend,
      headerButtonLayout,
      todayButton,
      yearHeader,
    })
  return (
    <s.Calendar className={className}>
      {yearHeader && (
        <s.YearHeader>
          <s.PrevButton onClick={onClickPrevYear} />
          <s.Month $layout={headerButtonLayout} key={selectedDateProps.month}>
            {selectedDateProps.year}
          </s.Month>
          <s.NextButton onClick={onClickNextYear} />
          {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
        </s.YearHeader>
      )}
      <s.MonthHeader $layout={headerButtonLayout}>
        <s.PrevButton onClick={onClickPrevMonth} />
        <s.Month $layout={headerButtonLayout} key={selectedDateProps.month}>
          {selectedDateProps.month}월
        </s.Month>
        {(!blockFuture ||
          selectedDateProps.year < new Date().getFullYear() ||
          (selectedDateProps.year === new Date().getFullYear() && selectedDateProps.month < todayDateProps.month)) && (
          <s.NextButton onClick={onClickNextMonth} />
        )}
        {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
      </s.MonthHeader>
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
        />
      </s.Body>
    </s.Calendar>
  )
}
