import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, DayValue } from 'react-modern-calendar-datepicker'

interface StatsDatePickerProps {
  onDateSelect: (selectedDate: DayValue | null) => void
}

export const StatsDatePicker: React.FC<StatsDatePickerProps> = ({ onDateSelect }) => {
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null)

  const handleDateChange = (day: DayValue) => {
    setSelectedDay(day)
    onDateSelect(day)
  }

  return <Calendar value={selectedDay} onChange={handleDateChange} shouldHighlightWeekends />
}
