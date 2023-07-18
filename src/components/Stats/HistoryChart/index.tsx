import React from 'react'
import {
  ResultContainer,
  ResultStatsContainer,
  CompareStatsContainer,
  CompareTitleWrapper,
  CompareTitle,
  CompareTimer,
} from './styled'
import { MainHistory } from './component/MainHistory'
import { BumpGraph } from '../CompareChart/component/BumpGraph'

export const HistoryChart = () => {
  return (
    <ResultContainer>
      <ResultStatsContainer>
        <MainHistory />
      </ResultStatsContainer>
      <CompareStatsContainer>
        <CompareTitleWrapper>
          <CompareTitle>오후 7시까지의 비교</CompareTitle>
          <CompareTimer>+ 00:30:13</CompareTimer>
        </CompareTitleWrapper>
        <BumpGraph />
      </CompareStatsContainer>
    </ResultContainer>
  )
}
