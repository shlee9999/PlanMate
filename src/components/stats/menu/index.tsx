import React, { useState } from 'react'
import { HistoryChart } from '../HistoryChart'
import { Root } from './styled'
import { StatsDatePicker } from '../DatePicker'
import { DayValue } from 'react-modern-calendar-datepicker'

export const MenuBox = () => {
  const [selectedDate, setSelectedDate] = useState<DayValue | null>(null)

  const handleDateSelect = (selectedDate: DayValue | null) => {
    setSelectedDate(selectedDate)
  }

  return (
    <Root>
      <StatsDatePicker onDateSelect={handleDateSelect} />
      <HistoryChart selectedDate={selectedDate} />
    </Root>
  )
}
