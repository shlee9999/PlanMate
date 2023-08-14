import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CalendarWrapper, HGrid, VGrid, DateButton, FlexBox, DayWrapper, Event, Hour } from './styled'
import { RootState } from 'modules'
import { TodoPlans } from 'types'
import { DAYS, TIMES, HOUR_HEIGHT, HOUR_MARGIN_TOP } from './constant'
import { addDateBy, areDatesSame, getMonday, areDaySame } from './utils'
import { Tooltip } from './Tooltip'

export const WeeklyCalendar: React.FC = () => {
  const [mondayDate, setMondayDate] = useState<Date>(getMonday())

  const planList = useSelector((state: RootState) => state.todoplans)

  const calHowLongHour = (beginHour: number, finishHour: number): number => {
    return +finishHour - +beginHour
  }

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

  const [hoveredPlan, setHoveredPlan] = useState<TodoPlans | null>(null)

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
                        fromTop={plan.begin_hour * HOUR_HEIGHT + plan.begin_minute / 2 + HOUR_MARGIN_TOP}
                        planColor={plan.color}
                        onClick={() => setHoveredPlan(plan)}
                        // onMouseOutCapture={() => setHoveredPlan(null)}
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
      {/* hoveredPlan */}
      {hoveredPlan && <Tooltip hoveredPlan={hoveredPlan} planDayIndex={dayIndex(hoveredPlan.day)}></Tooltip>}
    </>
  )
}
