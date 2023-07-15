import React from 'react'
import styled from 'styled-components'
import StudyPieChart from './StudyPieChart'
import { RestPieChart } from './RestPieChart'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StudyPiechartWrapper = styled.div`
  width: 180px;
  height: 142px;
  display: flex;
  flex-direction: column;
  /* background-color: black; */
`

const PiechartTitle = styled.span``

export const PieChartRecord = () => {
  return (
    <Container>
      <StudyPiechartWrapper>
        <PiechartTitle>과목별 비율</PiechartTitle>
        <StudyPieChart />
      </StudyPiechartWrapper>
      <StudyPiechartWrapper>
        <PiechartTitle>과목별 비율</PiechartTitle>
        <RestPieChart />
      </StudyPiechartWrapper>
    </Container>
  )
}
