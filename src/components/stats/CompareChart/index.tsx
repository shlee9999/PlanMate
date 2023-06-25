import React from 'react'
import { ResultContainer, ResultStatsContainer, CompareStatsContainer } from './styled'
import { PieGraph } from './component/PieGraph'
import { BumpGraph } from '../HistroyChart/component/BumpGraph'

function CompareChart() {
  return (
    <ResultContainer>
      <ResultStatsContainer>
        <PieGraph/>
      </ResultStatsContainer>
      <CompareStatsContainer>
        <BumpGraph/>
      </CompareStatsContainer>
    </ResultContainer>
  )
}

export default CompareChart
