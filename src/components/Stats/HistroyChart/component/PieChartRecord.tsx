import React from 'react'
import styled from 'styled-components'
import { StudyPieChart } from './StudyPieChart'
import { RestPieChart } from './RestPieChart'


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const PieChartRecord = () => {
  return (
    <Container>
      <StudyPieChart />
      <RestPieChart />
    </Container>
  )
}
