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
  selectedDate: DateProps
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
  selectedDate,
  dataSource = [],
  blockFuture = false,
  legend,
  headerButtonLayout = 'space-between',
  todayButton = false,
  yearHeader = false,
}) => {
  const [back, setBack] = useState(false)
  const onClickNextMonth = () => {
    const newDate = new Date(selectedDate.year, selectedDate.month + 1, 1)
    const newDateProps = dateUtils.getDateProps(newDate)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDate)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevMonth = () => {
    setSelectedDate(dateUtils.getDateProps(new Date(selectedDate.year, selectedDate.month - 1, 1)))
    setBack(true)
  }
  const onClickNextYear = () => {
    const newDate = new Date(selectedDate.year + 1, selectedDate.month, 1)
    const newDateProps = dateUtils.getDateProps(newDate)
    if (blockFuture) {
      if (!dateUtils.isFuture(newDate)) {
        setSelectedDate(newDateProps)
        setBack(false)
      }
    } else {
      setSelectedDate(newDateProps)
      setBack(false)
    }
  }
  const onClickPrevYear = () => {
    setSelectedDate(dateUtils.getDateProps(new Date(selectedDate.year - 1, selectedDate.month, 1)))
    setBack(true)
  }
  const onClickToday = () => setSelectedDate(dateUtils.getDateProps(new Date()))

  return (
    <s.Calendar className={className}>
      {yearHeader && (
        <s.YearHeader>
          <s.PrevButton onClick={onClickPrevYear} />
          <s.Month $layout={headerButtonLayout} key={selectedDate.month}>
            {selectedDate.year}
          </s.Month>
          <s.NextButton onClick={onClickNextYear} />
          {todayButton && <s.TodayButton onClick={onClickToday}>Today</s.TodayButton>}
        </s.YearHeader>
      )}
      <s.MonthHeader $layout={headerButtonLayout}>
        <s.PrevButton onClick={onClickPrevMonth} />
        <s.Month $layout={headerButtonLayout} key={selectedDate.month}>
          {selectedDate.month + 1}월
        </s.Month>
        <s.NextButton onClick={onClickNextMonth} />
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
              key={selectedDate.year + '' + selectedDate.month}
              variants={DateContainerVar}
              initial="initial"
              animate="visible"
              transition={{ duration: 0.5 }}
              custom={back}
            >
              {Array.from(Array(dateUtils.getWeekCount(selectedDate.year, selectedDate.month + 1)).keys()).map(
                (week) => (
                  <s.WeekRow key={week}>
                    {dateUtils
                      .getWeekDates(new Date(selectedDate.year, selectedDate.month, week * 7 + 1))
                      .map((date) => (
                        <DateCell
                          key={date.getTime()}
                          setSelectedDate={() => setSelectedDate(dateUtils.getDateProps(date))}
                          cellDate={date}
                          studyTimeHours={
                            date.getDate() - 1 < dataSource.length
                              ? dataSource[date.getDate() - 1].totalStudyTimeHours
                              : 0
                          }
                          selectedDate={selectedDate}
                          blockFuture={blockFuture}
                        />
                      ))}
                  </s.WeekRow>
                )
              )}
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
