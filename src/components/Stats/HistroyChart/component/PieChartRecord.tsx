import React, { useState } from 'react'
import styled from 'styled-components'
import StudyPieChart from './StudyPieChart'

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
`

const PiechartTitle = styled.span`
  margin-bottom: 5px;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #666666;
`

export interface PieChartData {
  name: string
  value: number
  fill: string
}

const StudyData: PieChartData[] = [
  { name: '국어', value: 400, fill: '#0088FE' },
  { name: '영어', value: 300, fill: '#00C49F' },
  { name: '수학', value: 300, fill: '#FFBB28' },
  { name: '과학', value: 200, fill: '#FF8042' },
]

const RestData: PieChartData[] = [{ name: '기타', value: 400, fill: '#D9D9D9' }]

const PieChartRecord: React.FC = () => {
  const [isStudyData, setStudyData] = useState<PieChartData[]>(StudyData)
  const [isRestData, setRestData] = useState<PieChartData[]>(RestData)
  return (
    <Container>
      <StudyPiechartWrapper>
        <PiechartTitle>종목별 비율</PiechartTitle>
        <StudyPieChart data={isStudyData} />
      </StudyPiechartWrapper>
      <StudyPiechartWrapper>
        <PiechartTitle>공부/휴식 비율</PiechartTitle>
        <StudyPieChart data={isRestData} />
      </StudyPiechartWrapper>
    </Container>
  )
}

export default PieChartRecord
