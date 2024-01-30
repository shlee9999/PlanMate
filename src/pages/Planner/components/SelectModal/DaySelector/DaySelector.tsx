import React from 'react'
import { weekDays } from 'constants/week'
import { DayButton } from './DayButton'
import * as s from './styled'

type DaySelectorProps = {
  assignSubjectDay: (day: string) => void
}

export const DaySelector: React.FC<DaySelectorProps> = ({ assignSubjectDay }) => {
  return (
    <s.DaySelect>
      {weekDays.map((day, index) => (
        <DayButton key={index} day={day} assignSubjectDay={assignSubjectDay} />
      ))}
    </s.DaySelect>
  )
}
