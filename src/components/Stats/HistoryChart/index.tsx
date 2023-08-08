import React from 'react'
import {
  ResultContainer,
  HeaderDateWrapper,
  ResultStatsContainer,
  CompareStatsContainer,
  CompareTitleWrapper,
  CompareTitle,
  CompareTimer,
} from './styled'
import { MainHistory } from './component/MainHistory'
import { BumpGraph } from '../CompareChart'
import { DayValue } from 'react-modern-calendar-datepicker'
import { HeaderDate } from './component/HeaderDate'
import { CompareTip } from './component/CompareTip'

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
      <CompareStatsContainer>
        <CompareTip />
        <BumpGraph />
      </CompareStatsContainer>
    </ResultContainer>
  )
}
