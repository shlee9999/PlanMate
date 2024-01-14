import { FC, MouseEvent, useState } from 'react'
import {
  Body,
  Circle,
  DateContainer,
  DayCell,
  DayRow,
  Header,
  Legend,
  LegendContainer,
  Line,
  Month,
  NextButton,
  PrevButton,
  Root,
  WeekRow,
} from './styled'
import { weekDays } from 'constants/week'
import { getDateInfo, getWeekDates, weekCount } from 'utils/helper'
import { AnimatePresence, Variants } from 'framer-motion'
import { DateProps } from 'pages/Stats'
import { DateCell } from './DateCell'
import { ResponseStats } from 'api/common/commonType'

type CalendarProps = {
  className?: string
  selectedDate: DateProps
  setSelectedDate: (date: DateProps) => void
  dataSource: ResponseStats
}
const momentum = 100
const MonthVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
}
export const Calendar: FC<CalendarProps> = ({ className, setSelectedDate, selectedDate, dataSource }) => {
  const onClickNext = () => {
    setSelectedDate(getDateInfo(new Date(selectedDate.year, selectedDate.month + 1, 1)))
    setBack(false)
  }
  const onClickPrev = () => {
    setSelectedDate(getDateInfo(new Date(selectedDate.year, selectedDate.month - 1, 1)))
    setBack(true)
  }
  const [back, setBack] = useState(false)

  return (
    <Root className={className}>
      <Header>
        <PrevButton fill="currentColor" onClick={onClickPrev} />
        <AnimatePresence custom={back} initial={false}>
          <Month
            key={selectedDate.month}
            variants={MonthVar}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            custom={back}
          >
            {selectedDate.month + 1}월
          </Month>
        </AnimatePresence>
        <NextButton fill="currentColor" onClick={onClickNext} />
      </Header>
      <Body>
        <DayRow>
          {weekDays.map((day, index) => (
            <DayCell key={index}>{day}</DayCell>
          ))}
        </DayRow>
        <Line />
        <AnimatePresence initial={false}>
          <DateContainer
            key={selectedDate.month}
            variants={MonthVar}
            initial="initial"
            animate="visible"
            transition={{ duration: 0.5 }}
            custom={back}
          >
            {Array.from(Array(weekCount(selectedDate.year, selectedDate.month + 1)).keys()).map((week) => (
              <WeekRow key={week}>
                {getWeekDates(new Date(selectedDate.year, selectedDate.month, week * 7 + 1)).map((date) => (
                  <DateCell
                    key={date.getTime()}
                    onClick={() => setSelectedDate(getDateInfo(date))}
                    cellDate={{
                      year: date.getFullYear(),
                      month: date.getMonth(),
                      date: date.getDate(),
                    }}
                    studyTimeHours={dataSource.totalStudyTimeHours}
                    selectedDate={selectedDate}
                  />
                ))}
              </WeekRow>
            ))}
          </DateContainer>
        </AnimatePresence>
      </Body>
      <LegendContainer>
        <Legend>
          <Circle />
          0~3시간
        </Legend>
        <Legend>
          <Circle />
          4~7시간
        </Legend>
        <Legend>
          <Circle />
          8~11시간
        </Legend>
        <Legend>
          <Circle />
          12시간 이상
        </Legend>
      </LegendContainer>
    </Root>
  )
}
