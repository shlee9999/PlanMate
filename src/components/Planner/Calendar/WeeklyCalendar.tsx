import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, HGrid, VGrid, DayWrapper, Hour, PlanWrapper, PlanTitle, PlanColor } from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'

//testplan
const dummyPlans: TodoPlans[] = [
  {
    id: '1',
    title: 'Meeting',
    color: 'red',
    day: '월',
    beginhour: 9,
    beginminute: 0,
    finishhour: 10,
    finishminute: 30,
    category: 'work',
  },
  {
    id: '2',
    title: 'Gym',
    color: 'blue',
    day: '화',
    beginhour: 18,
    beginminute: 0,
    finishhour: 19,
    finishminute: 0,
    category: 'exercise',
  },
]

const DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일']
const TIMES: string[] = [
  '오전 5시',
  '오전 6시',
  '오전 7시',
  '오전 8시',
  '오전 9시',
  '오전 10시',
  '오전 11시',
  '오후 12시',
  '오후 1시',
  '오후 2시',
  '오후 3시',
  '오후 4시',
  '오후 5시',
  '오후 6시',
  '오후 7시',
  '오후 8시',
  '오후 9시',
  '오후 10시',
  '오후 11시',
  '오전 12시',
  '오전 1시',
  '오전 2시',
  '오전 3시',
  '오전 4시',
]

const Plan: React.FC<TodoPlans> = ({ title, color, day, beginhour, beginminute, finishhour, finishminute }) => {
  const time = `${beginhour}:${beginminute} - ${finishhour}:${finishminute}`

  return (
    <PlanWrapper color={color}>
      <PlanTitle>{title}</PlanTitle>
      <PlanColor>{color}</PlanColor>
      <p>{time}</p>
      <p>{day}</p>
    </PlanWrapper>
  )
}

export const WeeklyCalendar: React.FC = () => {
  const plans = useSelector((state: RootState) => state.todoplans)

  return (
    <Wrapper>
      <HGrid first={'100px'} cols={1}>
        <VGrid rows={24}>
          {TIMES.map((hour) => (
            <Hour key={hour}>{hour}</Hour>
          ))}
        </VGrid>
        <HGrid cols={7}>
          {DAYS.map((day) => (
            <DayWrapper key={day} id={day}>
              <p>{day}</p>
              {dummyPlans.map((plan) => {
                if (plan.day === day) {
                  return (
                    <Plan
                      key={plan.id}
                      id={plan.id}
                      category={plan.category}
                      title={plan.title}
                      color={plan.color}
                      day={plan.day}
                      beginhour={plan.beginhour}
                      beginminute={plan.beginminute}
                      finishhour={plan.finishhour}
                      finishminute={plan.finishminute}
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
