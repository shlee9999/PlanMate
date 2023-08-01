import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CalendarWrapper, HGrid, VGrid, HourLine, DateButton, FlexBox, DayWrapper, Event, Hour } from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'
import { DAYS, TIMES, HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'
import { addDateBy, areDatesSame, getMonday, areDaySame } from './utils'
import { PlanDate, Plan } from './types'

export const WeeklyCalendar: React.FC = () => {
  const [mondayDate, setMondayDate] = useState<Date>(getMonday())

  const planList = useSelector((state: RootState) => state.todoplans)

  const calHowLongHour = (beginHour: number, finishHour: number): number => {
    return +finishHour - +beginHour
  }

  const hourNow = new Date().getHours()
  const minutesNow = new Date().getMinutes()

  // const onAddEvent = (date: Date) => {
  //   const name = prompt('name')
  //   const from = prompt('from')
  //   const to = prompt('to')

  //   let howlong = 0

  //   if (from && to) {
  //     howlong = +to - +from
  //   }

  //   const newPlan: Plan = { date: date, name: name, howLong: howlong }

  //   AddPlan(newPlan)
  // }

  const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7))
  const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7))

  const dayIndex = (day: string): number => {
    if (day === '월') return 0
    else if (day === '화') return 1
    else if (day === '수') return 2
    else if (day === '목') return 3
    else if (day === '금') return 4
    else if (day === '토') return 5
    else return 6
  }

  return (
    <>
      <FlexBox>
        <p>today: {new Date().toDateString()}</p>
        <p>from: {mondayDate?.toDateString()}</p>
        <p>to: {addDateBy(mondayDate, 6).toDateString()}</p>

        <DateButton onClick={prevWeek}>prev</DateButton>
        <DateButton onClick={nextWeek}>next</DateButton>
      </FlexBox>
      <CalendarWrapper>
        <HGrid first={'80px'} cols={1}>
          <VGrid rows={24}>
            {TIMES.map((hour) => (
              <Hour key={hour}>{hour}</Hour>
            ))}
          </VGrid>
          <HGrid cols={7}>
            {DAYS.map((day, index) => (
              <DayWrapper key={index}>
                <p>{day}</p>
                {planList.map(
                  (plan: TodoPlans) =>
                    // areDatesSame(addDateBy(mondayDate, index), plan.date) && ( //넘기는것이 필요할때
                    areDaySame(index, dayIndex(plan.day)) && (
                      <Event
                        key={plan.id}
                        howLong={calHowLongHour(plan.begin_hour, plan.finish_hour)}
                        fromTop={
                          plan.begin_hour * HOUR_HEIGHT + HOUR_MARGIN_TOP + HOUR_HEIGHT / 2 + plan.begin_minute / 2
                        }
                        planColor={plan.color}
                      >
                        {plan.title}
                      </Event>
                    )
                )}
              </DayWrapper>
            ))}
          </HGrid>
        </HGrid>
      </CalendarWrapper>
      {/* <ul>
        <span>아 멘탈나가</span>
        {planList.map((plan) => (
          <li key={plan.id}>
            <p>title : {plan.title}</p>
            <p>color : {plan.color}</p>
            <p>day : {plan.day}</p>
            <p>B_h : {plan.begin_hour}</p>
            <p>B_m : {plan.begin_minute}</p>
            <p>F_h : {plan.finish_hour}</p>
            <p>F_m : {plan.finish_minute}</p>
          </li>
        ))}
      </ul> */}
    </>
  )
}
