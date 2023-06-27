import React from 'react'
import { ResultContainer, ResultStatsContainer, CompareStatsContainer } from './styled'
import { MainHistory } from './component/MainHistory'
import { BumpGraph } from '../CompareChart/component/BumpGraph'

function CompareChart() {
  return (
    <ResultContainer>
      <ResultStatsContainer>
        <MainHistory/>
      </ResultStatsContainer>
      <CompareStatsContainer>
        <BumpGraph/>
      </CompareStatsContainer>
    </ResultContainer>
  )
}

export default CompareChart
