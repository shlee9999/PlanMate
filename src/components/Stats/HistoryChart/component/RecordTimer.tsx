import React from 'react'
import { RecordContainer, HeaderRecord, MainRecord } from './styled'
import { RecordTimerData } from './TimerRecord'

interface OwnProps {
  data: RecordTimerData
  title: string
}

export const RecordTimer: React.FC<OwnProps> = ({ data, title }) => {
  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <RecordContainer>
      <HeaderRecord>{title}</HeaderRecord>
      <MainRecord>
        {data.hour}시 {data.minute}분
      </MainRecord>
    </RecordContainer>
  )
}
