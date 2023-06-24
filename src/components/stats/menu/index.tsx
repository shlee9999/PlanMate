import React from 'react'
import Chalendar from '../chalendar'
import TimerCheck from '../timercheck'
import ResultGraph from '../resultgraph'
import { Root } from './styles'

function MenuBox() {
  return (
    <Root>
      <Chalendar></Chalendar>
      <TimerCheck></TimerCheck>
      <ResultGraph></ResultGraph>
    </Root>
  )
}

export default MenuBox
