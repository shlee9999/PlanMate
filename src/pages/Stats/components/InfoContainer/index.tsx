import React from 'react'
import { Root, ChartDividingLine, Header, StudyContainer } from './styled'
import { GraphContainer } from './component/GraphContainer'
import { DayValue } from 'react-modern-calendar-datepicker'

import { PieChartBox } from './component/PieChartContainer/PieChartContainer'
import { TimerContainer } from './component/TimerContainer/TimerContainer'
import { ShareContainer } from './component/ShareContainer'

interface HistoryChartProps {
  selectedDate: DayValue | null
}

export const InfoContainer: React.FC<HistoryChartProps> = ({ selectedDate }) => {
  const { year, month, day } = selectedDate || {}
  return (
    <Root right={true}>
      <Header>{year && month && day ? `${year}년 ${month}월 ${day}일 ` : ''}</Header>
      <StudyContainer>
        <TimerContainer />
        <PieChartBox />
      </StudyContainer>
      <ChartDividingLine />
      <GraphContainer />
      <ShareContainer />
    </Root>
  )
}
