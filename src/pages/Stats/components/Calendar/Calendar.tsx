import { FC, useState } from 'react'
import * as s from './styled'
import { weekDays } from 'constants/week'
import { dateUtils } from 'utils/helper'
import { AnimatePresence, Variants } from 'framer-motion'
import { DateProps } from 'pages/Stats/StatsPage'
import { DateCell } from './DateCell'
import { ResponseStats } from 'api/common/types'

type CalendarProps = {
  className?: string
  selectedDate: DateProps
  setSelectedDate: (date: DateProps) => void
  dataSource?: ResponseStats[]
}
const momentum = 100
const MonthVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
}
export const Calendar: FC<CalendarProps> = ({ className, setSelectedDate, selectedDate, dataSource }) => {
  const onClickNext = () => {
    setSelectedDate(dateUtils.getDateProps(new Date(selectedDate.year, selectedDate.month + 1, 1)))
    setBack(false)
  }
  const onClickPrev = () => {
    setSelectedDate(dateUtils.getDateProps(new Date(selectedDate.year, selectedDate.month - 1, 1)))
    setBack(true)
  }
  const [back, setBack] = useState(false)

  return (
    <s.Root className={className}>
      <s.Header>
        <s.PrevButton fill="currentColor" onClick={onClickPrev} />
        <AnimatePresence custom={back} initial={false}>
          <s.Month
            key={selectedDate.month}
            variants={MonthVar}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            custom={back}
          >
            {selectedDate.month + 1}월
          </s.Month>
        </AnimatePresence>
        <s.NextButton fill="currentColor" onClick={onClickNext} />
      </s.Header>
      <s.Body>
        <s.DayRow>
          {weekDays.map((day, index) => (
            <s.DayCell key={index}>{day}</s.DayCell>
          ))}
        </s.DayRow>
        <s.Line />
        <AnimatePresence initial={false}>
          <s.DateContainer
            key={selectedDate.month}
            variants={MonthVar}
            initial="initial"
            animate="visible"
            transition={{ duration: 0.5 }}
            custom={back}
          >
            {Array.from(Array(dateUtils.getWeekCount(selectedDate.year, selectedDate.month + 1)).keys()).map((week) => (
              <s.WeekRow key={week}>
                {dateUtils.getWeekDates(new Date(selectedDate.year, selectedDate.month, week * 7 + 1)).map((date) => (
                  <DateCell
                    key={date.getTime()}
                    onClick={() => setSelectedDate(dateUtils.getDateProps(date))}
                    cellDate={dateUtils.getDateProps(date)}
                    studyTimeHours={
                      dataSource[date.getDate() - 1 < dataSource.length ? date.getDate() - 1 : 0].totalStudyTimeHours
                    }
                    selectedDate={selectedDate}
                  />
                ))}
              </s.WeekRow>
            ))}
          </s.DateContainer>
        </AnimatePresence>
      </s.Body>
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
    </s.Root>
  )
}
