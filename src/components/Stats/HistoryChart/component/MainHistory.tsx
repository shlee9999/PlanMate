import React from 'react'
import { TimerRecord } from './TimerRecord'
import { PieChartRecord } from './PieChartRecord'
import { HeaderDate } from './HeaderDate'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 221px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: none;
`

const MainWrapper = styled.div`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #d9d9da;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TimerContainer = styled.div`
  width: 35%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChartContainer = styled.div`
  width: 55%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainHistory = () => {
  return (
    <Container>
      <HeaderDate />
      <MainWrapper>
        <TimerContainer>
          <TimerRecord />
        </TimerContainer>
        <ChartContainer>
          <PieChartRecord />
        </ChartContainer>
      </MainWrapper>
    </Container>
  )
}
