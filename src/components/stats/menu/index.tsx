import React from 'react'
import Calendar from '../calendar'
import TimerCheck from '../timercheck'
import ResultGraph from '../resultgraph'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Calendar/>
      <TimerCheck></TimerCheck>
      <ResultGraph></ResultGraph>
    </Root>
  )
}

export default MenuBox
