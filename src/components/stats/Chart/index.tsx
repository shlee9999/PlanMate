import React from 'react'
import { TimerCheckContainer } from './styled'
import { PieGraph } from './component/PieGraph'
import { BumpGraph } from './component/BumpGraph'

function TimerCheck() {
  return (
    <TimerCheckContainer>
      <PieGraph/>
      <BumpGraph/>
      {/* <TimerCheckGraph/> */}
    </TimerCheckContainer>
  )
}

export default TimerCheck
