import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  CalendarWrapper,
  HGrid,
  VGrid,
  HourLine,
  DateButton,
  FlexBox,
  DayWrapper,
  Event,
  Hour,
  PlanWrapper,
  PlanTitle,
  PlanColor,
} from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'
import { DAYS, TIMES, HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'
import { addDateBy, areDatesSame, getMonday } from './utils'
import { PlanDate, Plan } from './types'
// Test data
// const dummyPlans: TodoPlans[] = [
//   {
//     id: '1',
//     title: 'Meeting',
//     color: 'red',
//     day: '월',
//     begin_hour: 9,
//     begin_minute: 0,
//     finish_hour: 10,
//     finish_minute: 30,
//     category: 'work',
//   },
//   {
//     id: '2',
//     title: 'Gym',
//     color: 'blue',
//     day: '화',
//     begin_hour: 18,
//     begin_minute: 0,
//     finish_hour: 19,
//     finish_minute: 0,
//     category: 'exercise',
//   },
// ]

// Convert dummyPlans to match TIMES array
// const convertedPlans: TodoPlans[] = dummyPlans.map((plan) => ({
//   ...plan,
//   begin_hour: plan.begin_hour % 12 === 0 ? 12 : plan.begin_hour % 12,
//   finish_hour: plan.finish_hour % 12 === 0 ? 12 : plan.finish_hour % 12,
// }))

//Plans with redux

// const Plan: React.FC<TodoPlans> = ({ title, color, day, begin_hour, begin_minute, finish_hour, finish_minute }) => {
//   const time = `${begin_hour}:${begin_minute} - ${finish_hour}:${finish_minute}`

//   return (
//     <PlanWrapper color={color}>
//       <PlanTitle>{title}</PlanTitle>
//       <PlanColor>{color}</PlanColor>
//       <p>{time}</p>
//       <p>{day}</p>
//     </PlanWrapper>
//   )
// }

export const WeeklyCalendar: React.FC = () => {
  const [mondayDate, setMondayDate] = useState<Date>(getMonday())

  const PlanArr: Plan[] | [] = [
    { date: new Date(2023, 6, 31, 1), name: 'first hi', howLong: 1 },
    { date: new Date(2023, 7, 1, 13), name: 'second hi', howLong: 3 },
  ]
  const [isPlans, isSetPlans] = useState<Plan[]>(PlanArr)

  const [addPlan, setAddPlan] = useState<Plan[]>()

  const AddPlan = (plan: Plan): void => {
    ;(PlanArr: Plan[]) => [...PlanArr, plan]
  }

  const hourNow = new Date().getHours()
  const minutesNow = new Date().getMinutes()

  const addPlanToExist = (plans: Plan[], newPlan: Plan): Plan[] => {
    return [...plans, newPlan]
  }

  const onAddEvent = (date: Date) => {
    const name = prompt('name')
    const fromString = prompt('from')
    const from = parseInt(fromString, 10)

    const toString = prompt('to')
    const to = parseInt(toString, 10)

    const newPlan: Plan = { date: date, name: name, howLong: Number(to - from) }

    isSetPlans(addPlanToExist(PlanArr, newPlan))

    // date.setHours(from)

    // setAddPlan((PlanArr) => [...PlanArr, { date, name, howLong: Number(to - from) }])
    // AddPlan({ date, name, howLong: Number(to - from) })
  }

  const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7))
  const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7))

  // type isToday = object

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
              <DayWrapper
                onDoubleClick={() => onAddEvent(addDateBy(mondayDate, index))}
                // isToday={areDatesSame(new Date(),7 addDateBy(mondayDate, index))}
              >
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

                {/* {plans.map((plan) => {
                if (plan.day === day) {
                  return (
                    <Plan
                      key={plan.id}
                      id={plan.id}
                      category={plan.category}
                      title={plan.title}
                      color={plan.color}
                      day={plan.day}
                      begin_hour={plan.begin_hour}
                      begin_minute={plan.begin_minute}
                      finish_hour={plan.finish_hour}
                      finish_minute={plan.finish_minute}
                    />
                  )
                }
                return null
              })} */}
              </DayWrapper>
            ))}
          </HGrid>
        </HGrid>
        <HourLine fromTop={hourNow * HOUR_HEIGHT + HOUR_MARGIN_TOP + HOUR_HEIGHT / 2 + minutesNow} />
      </CalendarWrapper>
    </>
  )
}
