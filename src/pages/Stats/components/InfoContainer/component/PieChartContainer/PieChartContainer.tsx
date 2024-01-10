import React, { useState } from 'react'

import { Root, Wrapper, PiechartTitle } from './styled'
import { PieChart } from './PieChart'

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

export const PieChartBox: React.FC = () => {
  const [isStudyData, setStudyData] = useState<PieChartData[]>(StudyData)
  const [isRestData, setRestData] = useState<PieChartData[]>(RestData)
  return (
    <Root>
      <Wrapper>
        <PiechartTitle>종목별 비율</PiechartTitle>
        <PieChart data={isStudyData} />
      </Wrapper>
      <Wrapper>
        <PiechartTitle>공부/휴식 비율</PiechartTitle>
        <PieChart data={isRestData} />
      </Wrapper>
    </Root>
  )
}

// 종목별 비율, 공부/휴식 비율 -> StudyPieChart 컴포넌트 재사용 (API 설정 후, 수정)
