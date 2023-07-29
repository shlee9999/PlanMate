import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, HGrid, VGrid, DayWrapper, Hour, PlanWrapper, PlanTitle, PlanColor } from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'

// Test data
const dummyPlans: TodoPlans[] = [
  {
    id: '1',
    title: 'Meeting',
    color: 'red',
    day: '월',
    begin_hour: 9,
    begin_minute: 0,
    finish_hour: 10,
    finish_minute: 30,
    category: 'work',
  },
  {
    id: '2',
    title: 'Gym',
    color: 'blue',
    day: '화',
    begin_hour: 18,
    begin_minute: 0,
    finish_hour: 19,
    finish_minute: 0,
    category: 'exercise',
  },
]

// Convert dummyPlans to match TIMES array
const convertedPlans: TodoPlans[] = dummyPlans.map((plan) => ({
  ...plan,
  begin_hour: plan.begin_hour % 12 === 0 ? 12 : plan.begin_hour % 12,
  finish_hour: plan.finish_hour % 12 === 0 ? 12 : plan.finish_hour % 12,
}))

const DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일']
const TIMES: number[] = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4]

const Plan: React.FC<TodoPlans> = ({ title, color, day, begin_hour, begin_minute, finish_hour, finish_minute }) => {
  const time = `${begin_hour}:${begin_minute} - ${finish_hour}:${finish_minute}`

  return (
    <PlanWrapper color={color}>
      <PlanTitle>{title}</PlanTitle>
      <PlanColor>{color}</PlanColor>
      <p>{time}</p>
      <p>{day}</p>
    </PlanWrapper>
  )
}

export const WeeklyCalendar: React.FC<{ plans: TodoPlans[] }> = ({ plans }) => {
  return (
    <Wrapper>
      <HGrid first={'80px'} cols={1}>
        <VGrid rows={24}>
          {TIMES.map((hour) => (
            <Hour key={hour}>{hour}</Hour>
          ))}
        </VGrid>
        <HGrid cols={7}>
          {DAYS.map((day) => (
            <DayWrapper key={day} id={day}>
              <p>{day}</p>
              {plans.map((plan) => {
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
              })}
            </DayWrapper>
          ))}
        </HGrid>
      </HGrid>
    </Wrapper>
  )
}

const Main: React.FC = () => {
  return <WeeklyCalendar plans={convertedPlans} />
}

export default Main
