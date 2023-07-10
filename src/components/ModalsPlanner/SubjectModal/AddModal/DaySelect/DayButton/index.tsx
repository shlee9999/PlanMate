import React from 'react'
import { Root } from './styled'

type DayButtonProps = {
  day: string
  assignSubjectDay: (day: string) => void
}

export const DayButton: React.FC<DayButtonProps> = ({ day, assignSubjectDay }) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectDay(day)
  }
  return <Root onClick={onClickButton}>{day}</Root>
}
