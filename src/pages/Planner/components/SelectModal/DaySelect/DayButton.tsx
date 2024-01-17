import React from 'react'
import { DayButtonRoot } from './styled'

type DayButtonProps = {
  day: string
  assignSubjectDay: (day: string) => void
}

export const DayButton: React.FC<DayButtonProps> = ({ day, assignSubjectDay }) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => assignSubjectDay(day)
  return <DayButtonRoot onClick={onClickButton}>{day}</DayButtonRoot>
}
