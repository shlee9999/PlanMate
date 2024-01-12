import { FC, useState } from 'react'
import {
  Body,
  Circle,
  DateCell,
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
import { getDateInfo, getWeekDates } from 'utils/helper'

type CalendarProps = {
  className?: string
}

export const Calendar: FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(getDateInfo(new Date()))
  const onClickNext = () => setCurrentDate((prev) => getDateInfo(new Date(prev.year, prev.month + 1, 1)))
  const onClickPrev = () => setCurrentDate((prev) => getDateInfo(new Date(prev.year, prev.month - 1, 1)))
  console.log(currentDate)
  return (
    <Root className={className}>
      <Table>
        <Header>
          <HeaderRow>
            <PrevButton fill="currentColor" onClick={onClickPrev} />
            <Month>{currentDate.month + 1}월</Month>
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
          {[0, 1, 2, 3, 4, 5].map((week) => (
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
