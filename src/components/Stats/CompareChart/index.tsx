import React from 'react'
import { Container, HeaderWrapper, MainWrapper } from './styled'
import { CompareTip } from '../HistoryChart/component/CompareTip'
import { BumpGraph } from './BumphGraph'
import { Legend } from './Legend'

export const CompareChart = () => {
  return (
    <Container>
      <HeaderWrapper>
        <CompareTip />
      </HeaderWrapper>
      <MainWrapper>
        <Legend />
        <BumpGraph />
      </MainWrapper>
    </Container>
  )
}
