import React from 'react'
import styled from 'styled-components'
import { DayValue } from 'react-modern-calendar-datepicker'

interface HeaderDateProps {
  selectedDate: DayValue | null
}

const Container = styled.div`
  height: 15px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export const HeaderDate: React.FC<HeaderDateProps> = ({ selectedDate }) => {
  const { year, month, day } = selectedDate || {}

  return <Container>{year && month && day ? `${year}년 ${month}월 ${day}일 ` : ''}</Container>
}

// import { useFormattedDate } from 'utils/helper'
// const formattedDate: string = useFormattedDate()
