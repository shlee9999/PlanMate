import { FC, useState } from 'react'
import { weekDays } from 'constants/week'
import { dateUtils } from 'utils'
import { AnimatePresence, Variants } from 'framer-motion'
import { DateProps } from 'types'
import { DateCell } from './DateCell'
import { ResponseStats } from 'api/types'
import * as s from './styled'

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
const momentum = 100
const DateContainerVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
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
  const [back, setBack] = useState(false)
  const onClickNextMonth = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'month', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevMonth = () => {
    setSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'month', -1))
    setBack(true)
  }
  const onClickNextYear = () => {
    const newDateProps = dateUtils.calculateDateProps(selectedDateProps, 'year', 1)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDateProps)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevYear = () => {
    setSelectedDate(dateUtils.calculateDateProps(selectedDateProps, 'year', 1))
    setBack(true)
  }
  const onClickToday = () => setSelectedDate(dateUtils.getDateProps(new Date()))
  const todayDateProps = dateUtils.getTodayDateProps()
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

        <AnimatePresence initial={false}>
          <s.DateContainerWrapper>
            <s.DateContainer
              key={selectedDateProps.year + '' + selectedDateProps.month}
              variants={DateContainerVar}
              initial="initial"
              animate="visible"
              transition={{ duration: 0.5 }}
              custom={back}
            >
              {Array.from(
                Array(dateUtils.getWeekCount(selectedDateProps.year, selectedDateProps.month + 1)).keys()
              ).map((week) => (
                <s.WeekRow key={week}>
                  {dateUtils
                    .getWeekDates({ year: selectedDateProps.year, month: selectedDateProps.month, date: week * 7 + 1 })
                    .map((date, index) => (
                      <DateCell
                        key={index}
                        setSelectedDate={() => setSelectedDate(date)}
                        cellDateProps={date}
                        studyTimeHours={
                          date.date - 1 < dataSource.length ? dataSource[date.date - 1].totalStudyTimeHours : 0
                        }
                        selectedDate={selectedDateProps}
                        blockFuture={blockFuture}
                      />
                    ))}
                </s.WeekRow>
              ))}
              {legend && (
                <s.LegendContainer>
                  <s.Legend>
                    <s.Circle />
                    0~3시간
                  </s.Legend>
                  <s.Legend>
                    <s.Circle />
                    4~7시간
                  </s.Legend>
                  <s.Legend>
                    <s.Circle />
                    8~11시간
                  </s.Legend>
                  <s.Legend>
                    <s.Circle />
                    12시간 이상
                  </s.Legend>
                </s.LegendContainer>
              )}
            </s.DateContainer>
          </s.DateContainerWrapper>
        </AnimatePresence>
      </s.Body>
    </s.Calendar>
  )
}
