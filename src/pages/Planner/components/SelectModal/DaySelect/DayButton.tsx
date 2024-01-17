import React from 'react'
import * as s from './styled'

type DayButtonProps = {
  day: string
  assignSubjectDay: (day: string) => void
}

export const DayButton: React.FC<DayButtonProps> = ({ day, assignSubjectDay }) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => assignSubjectDay(day)
  return <s.DayButtonRoot onClick={onClickButton}>{day}</s.DayButtonRoot>
}
