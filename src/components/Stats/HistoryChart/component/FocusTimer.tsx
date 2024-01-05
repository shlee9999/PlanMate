import React from 'react'
import { RecordContainer, HeaderRecord, MainRecord } from './styled'
import { FocusTimerData } from './TimerRecord'

interface OwnProps {
  data: FocusTimerData
  title: string
}

export const FocusTimer: React.FC<OwnProps> = ({ data, title }) => {
  // Function to add leading zero if value is less than 10
  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <RecordContainer>
      <HeaderRecord>{title}</HeaderRecord>
      <MainRecord>
        {addLeadingZero(data.hour)} : {addLeadingZero(data.minute)} : {addLeadingZero(data.second)}
      </MainRecord>
    </RecordContainer>
  )
}