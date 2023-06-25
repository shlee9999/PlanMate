import React from 'react'
import Main from '../calendar/Main'
import TimerCheck from '../timercheck'
import ResultGraph from '../resultgraph'
import { Root } from './styled'

function MenuBox() {
  return (
    <Root>
      <Main/>
      <TimerCheck></TimerCheck>
      <ResultGraph></ResultGraph>
    </Root>
  )
}

export default MenuBox
