import React from 'react'
import { ResultContainer, HeaderDateWrapper, ResultStatsContainer, CompareStatsContainer } from './styled'
import { MainHistory } from './component/MainHistory'
import { CompareChart } from '../CompareChart'
import { DayValue } from 'react-modern-calendar-datepicker'
import { HeaderDate } from './component/HeaderDate'
import { ChartDividingLine } from '../menu/styled'

interface HistoryChartProps {
  selectedDate: DayValue | null
}

export const HistoryChart: React.FC<HistoryChartProps> = ({ selectedDate }) => {
  return (
    <ResultContainer>
      <HeaderDateWrapper>
        <HeaderDate selectedDate={selectedDate} />
      </HeaderDateWrapper>
      <ResultStatsContainer>
        <MainHistory selectedDate={selectedDate} />
      </ResultStatsContainer>
      <ChartDividingLine />
      <CompareStatsContainer>
        <CompareChart />
      </CompareStatsContainer>
    </ResultContainer>
  )
}
