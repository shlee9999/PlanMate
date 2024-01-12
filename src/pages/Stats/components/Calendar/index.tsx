import { FC, useState } from 'react'
import {
  Body,
  Circle,
  DateCell,
  DateContainer,
  DayCell,
  DayRow,
  Header,
  HeaderRow,
  Legend,
  LegendContainer,
  Line,
  Month,
  NextButton,
  PrevButton,
  Root,
  Table,
  WeekRow,
} from './styled'
import { weekDays } from 'constants/week'
import { getDateInfo, getWeekDates, weekCount } from 'utils/helper'
import { AnimatePresence, Variants } from 'framer-motion'

type CalendarProps = {
  className?: string
}
const momentum = 100
const MonthVar: Variants = {
  initial: (back: boolean) => ({ opacity: 0, x: back ? -momentum : momentum }),
  visible: { opacity: 1, x: 0 },
  exit: (back: boolean) => ({ opacity: 0, x: back ? momentum : -momentum }),
}
export const Calendar: FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(getDateInfo(new Date()))
  const onClickNext = () => {
    setCurrentDate((prev) => getDateInfo(new Date(prev.year, prev.month + 1, 1)))
    setBack(false)
  }
  const onClickPrev = () => {
    setCurrentDate((prev) => getDateInfo(new Date(prev.year, prev.month - 1, 1)))
    setBack(true)
  }
  const [back, setBack] = useState(false)

  return (
    <Root className={className}>
      <Table>
        <Header>
          <HeaderRow>
            <PrevButton fill="currentColor" onClick={onClickPrev} />
            <AnimatePresence custom={back} initial={false}>
              <Month
                key={currentDate.month}
                variants={MonthVar}
                initial="initial"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                custom={back}
              >
                {currentDate.month + 1}월
              </Month>
            </AnimatePresence>
            <NextButton fill="currentColor" onClick={onClickNext} />
          </HeaderRow>
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
              key={currentDate.month}
              variants={MonthVar}
              initial="initial"
              animate="visible"
              transition={{ duration: 0.5 }}
              custom={back}
            >
              {Array.from(Array(weekCount(currentDate.year, currentDate.month + 1)).keys()).map((week) => (
                <WeekRow key={week}>
                  {getWeekDates(new Date(currentDate.year, currentDate.month, week * 7 + 1)).map((date) => (
                    <DateCell
                      key={date.getTime()}
                      $currentMonth={date.getMonth() === currentDate.month}
                      onClick={() => setCurrentDate(getDateInfo(date))}
                      $isSelected={
                        getDateInfo(date).date == currentDate.date && getDateInfo(date).month === currentDate.month
                      }
                    >
                      {/* 달력 이전달, 이번달만 표시하고, 이후는 표시 안하는 로직 */}
                      {date.getMonth() <= currentDate.month
                        ? currentDate.month === 11 && date.getMonth() === 0
                          ? null
                          : date.getDate()
                        : currentDate.month === 0 && date.getMonth() === 11
                        ? date.getDate()
                        : null}
                    </DateCell>
                  ))}
                </WeekRow>
              ))}
            </DateContainer>
          </AnimatePresence>
        </Body>
      </Table>
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
