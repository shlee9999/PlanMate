import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, DayValue, Locale } from 'react-modern-calendar-datepicker'
import { DatePickerFooter } from './DatePickerFooter'
import './index.css'

// Define the custom locale by extending the Locale interface
const myCustomLocale: Locale = {
  // months list by order
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],

  // week days by order
  weekDays: [
    {
      name: 'Sunday', // used for accessibility
      short: '일', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
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

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject) {
    return gregorainTodayObject
  },

  // return a native JavaScript date here
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day)
  },

  // return a number for date's month length
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate()
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit
  },

  // texts in the date picker
  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',

  // for input range value
  from: 'from',
  to: 'to',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
}

interface StatsDatePickerProps {
  onDateSelect: (selectedDate: DayValue | null) => void
}

export const StatsDatePicker: React.FC<StatsDatePickerProps> = ({ onDateSelect }) => {
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null)

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
