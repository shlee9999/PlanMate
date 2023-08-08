import React from 'react'
import { TimerRecord } from './TimerRecord'
import { PieChartRecord } from './PieChartRecord'
import { HeaderDate } from './HeaderDate'
import { DayValue } from 'react-modern-calendar-datepicker'
import { MainHistoryContainer, MainWrapper, TimerWrapper, ChartWrapper } from './styled'

interface MainHistoryProps {
  selectedDate: DayValue | null
}

export const MainHistory: React.FC<MainHistoryProps> = ({ selectedDate }) => {
  return (
    <MainHistoryContainer>
      {/* <HeaderDate selectedDate={selectedDate} /> */}
      <MainWrapper>
        <TimerWrapper>
          <TimerRecord />
        </TimerWrapper>
        <ChartWrapper>
          <PieChartRecord />
        </ChartWrapper>
      </MainWrapper>
    </MainHistoryContainer>
  )
}
