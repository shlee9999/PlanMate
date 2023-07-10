import React from 'react'
import { week } from 'constants/week'
import { DaySelectWrapper } from './styled'
import { DayButton } from './DayButton'

type DaySelectProps = {
  assignSubjectDay: (day: string) => void
}

export const DaySelect: React.FC<DaySelectProps> = ({ assignSubjectDay }) => {
  return (
    <DaySelectWrapper>
      {week.map((day, index) => (
        <DayButton key={index} day={day} assignSubjectDay={assignSubjectDay} />
      ))}
    </DaySelectWrapper>
  )
}
