import React from 'react'
import { TimerCheckContainer } from './styled'
import { PieGraph } from './component/PieGraph'

function TimerCheck() {
  return (
    <TimerCheckContainer>
      <PieGraph/>
      {/* <TimerCheckGraph/> */}
    </TimerCheckContainer>
  )
}

export default TimerCheck
