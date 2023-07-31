import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CalendarWrapper, HGrid, VGrid, HourLine, DateButton, FlexBox, DayWrapper, Event, Hour } from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'
import { DAYS, TIMES, HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'
import { addDateBy, areDatesSame, getMonday } from './utils'
import { PlanDate, Plan } from './types'

export const WeeklyCalendar: React.FC = () => {
  const [mondayDate, setMondayDate] = useState<Date>(getMonday())

  const PlanArr: Plan[] | [] = [
    { date: new Date(2023, 6, 31, 1), name: 'first hi', howLong: 1 },
    { date: new Date(2023, 7, 1, 13), name: 'second hi', howLong: 3 },
  ]
  const [isPlans, isSetPlans] = useState<Plan[]>(PlanArr)

  const AddPlan = (plan: Plan): void => {
    isSetPlans((prevPlans) => [...prevPlans, plan])
  }

  const hourNow = new Date().getHours()
  const minutesNow = new Date().getMinutes()

  const onAddEvent = (date: Date) => {
    const name = prompt('name')
    const from = prompt('from')
    const to = prompt('to')

    let howlong = 0

    if (from && to) {
      howlong = +to - +from
    }

    const newPlan: Plan = { date: date, name: name, howLong: howlong }

    AddPlan(newPlan)
  }

  const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7))
  const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7))

  return (
    <>
      <div>
        {PlanArr.map((plan: Plan, index) => (
          <div key={index}>
            <div>{plan.name}</div>
          </div>
        ))}
      </div>
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
              <DayWrapper onDoubleClick={() => onAddEvent(addDateBy(mondayDate, index))}>
                <p>{day}</p>
                {isPlans.map(
                  (plan: Plan) =>
                    areDatesSame(addDateBy(mondayDate, index), plan.date) && (
                      <Event
                        howLong={plan.howLong}
                        fromTop={
                          plan.date.getHours() * HOUR_HEIGHT +
                          HOUR_MARGIN_TOP +
                          HOUR_HEIGHT / 2 +
                          plan.date.getMinutes() / 2
                        }
                      >
                        {plan.name}
                      </Event>
                    )
                )}
              </DayWrapper>
            ))}
          </HGrid>
        </HGrid>
        <HourLine fromTop={hourNow * HOUR_HEIGHT + HOUR_MARGIN_TOP + HOUR_HEIGHT / 2 + minutesNow} />
      </CalendarWrapper>
    </>
  )
}
