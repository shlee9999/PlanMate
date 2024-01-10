import React from 'react'

import { Header, Time, Root, TimerBox } from './styled'

interface OwnProps {
  text: string
  title: string
}

export const Timer: React.FC<OwnProps> = ({ title, text }) => {
  return (
    <TimerBox>
      <Header>{title}</Header>
      <Time>{text}</Time>
    </TimerBox>
  )
}
