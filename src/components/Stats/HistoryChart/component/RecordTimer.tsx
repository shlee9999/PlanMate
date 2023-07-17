import React from 'react'
import { ContainerRecord, HeaderRecord, MainRecord } from './styled'
import { RecordTimerData } from './TimerRecord'

interface OwnProps {
  data: RecordTimerData
  title: string
}

export const RecordTimer: React.FC<OwnProps> = ({ data, title }) => {
  // Function to add leading zero if value is less than 10
  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <ContainerRecord>
      <HeaderRecord>{title}</HeaderRecord>
      <MainRecord>
        {data.hour}시 {data.minute}분
      </MainRecord>
    </ContainerRecord>
  )
}
