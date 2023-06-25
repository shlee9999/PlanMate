import React from 'react'
import { ResultContainer } from './styled'
import { PieGraph } from './component/PieGraph'
import { BumpGraph } from './component/BumpGraph'

function TimerCheck() {
  return (
    <ResultContainer>
      <PieGraph/>
      <BumpGraph/>
      {/* <TimerCheckGraph/> */}
    </ResultContainer>
  )
}

export default TimerCheck
