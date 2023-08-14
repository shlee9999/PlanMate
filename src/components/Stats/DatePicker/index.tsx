import React, { useEffect, useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, DayValue, Locale } from 'react-modern-calendar-datepicker'
import { DatePickerFooter } from './DatePickerFooter'
import './index.css'

const myCustomLocale: Locale = {
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],

  weekDays: [
    {
      name: 'Sunday',
      short: '일',
      isWeekend: true,
    },
    {
      name: 'Monday',
      short: '월',
    },
    {
      name: 'Tuesday',
      short: '화',
    },
    {
      name: 'Wednesday',
      short: '수',
    },
    {
      name: 'Thursday',
      short: '목',
    },
    {
      name: 'Friday',
      short: '금',
    },
    {
      name: 'Saturday',
      short: '토',
      isWeekend: true,
    },
  ],

  weekStartingIndex: 0,

  getToday(gregorainTodayObject) {
    return gregorainTodayObject
  },

  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day)
  },

  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate()
  },

  transformDigit(digit) {
    return digit
  },

  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',

  from: 'from',
  to: 'to',

  digitSeparator: ',',

  yearLetterSkip: 0,

  isRtl: false,
}

interface StatsDatePickerProps {
  onDateSelect: (selectedDate: DayValue | null) => void
}

export const StatsDatePicker: React.FC<StatsDatePickerProps> = ({ onDateSelect }) => {
  const today = new Date()

  const initialDay: DayValue = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  }

  const [selectedDay, setSelectedDay] = useState<DayValue | null>(initialDay)

  useEffect(() => {
    const handleButtonClick = () => {
      onDateSelect(selectedDay)
    }
    window.addEventListener('click', handleButtonClick)
    return () => {
      window.removeEventListener('click', handleButtonClick)
    }
  }, [selectedDay])

  const handleDateChange = (day: DayValue) => {
    setSelectedDay(day)
    onDateSelect(day)
  }

  return (
    <Calendar
      value={selectedDay}
      onChange={handleDateChange}
      shouldHighlightWeekends
      calendarClassName="custom-calendar"
      locale={myCustomLocale}
      customDaysClassName={[
        { year: 2023, month: 7, day: 1, className: 'zeroToThreeDay' },
        { year: 2023, month: 7, day: 2, className: 'fourToSevenDay' },
        { year: 2023, month: 7, day: 3, className: 'eightToElevenDay' },
        { year: 2023, month: 7, day: 4, className: 'overTwelveDay' },
      ]}
      renderFooter={() => <DatePickerFooter />}
    />
  )
}
