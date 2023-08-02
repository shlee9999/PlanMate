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
import { BumpGraph } from '../CompareChart'
import { DayValue } from 'react-modern-calendar-datepicker'

interface HistoryChartProps {
  selectedDate: DayValue | null
}

export const HistoryChart: React.FC<HistoryChartProps> = ({ selectedDate }) => {
  return (
    <ResultContainer>
      <ResultStatsContainer>
        <MainHistory selectedDate={selectedDate} />
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
