import React from 'react'
import { weekDays } from 'constants/week'
import { DayButton } from './DayButton'
import * as s from './styled'

type DaySelectProps = {
  assignSubjectDay: (day: string) => void
}

export const DaySelect: React.FC<DaySelectProps> = ({ assignSubjectDay }) => {
  return (
    <s.DaySelectWrapper>
      {weekDays.map((day, index) => (
        <DayButton key={index} day={day} assignSubjectDay={assignSubjectDay} />
      ))}
    </s.DaySelectWrapper>
  )
}
