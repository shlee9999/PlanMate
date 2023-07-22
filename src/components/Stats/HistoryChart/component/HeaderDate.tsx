import React from 'react'
import { DayValue } from 'react-modern-calendar-datepicker'
import { HeaderWrapper } from './styled'

interface HeaderDateProps {
  selectedDate: DayValue | null
}

export const HeaderDate: React.FC<HeaderDateProps> = ({ selectedDate }) => {
  const { year, month, day } = selectedDate || {}

  return <HeaderWrapper>{year && month && day ? `${year}년 ${month}월 ${day}일 ` : ''}</HeaderWrapper>
}
