import React from 'react'
import { useSelector } from 'react-redux'
import { ContainerRecord, HeaderRecord, MainRecord } from './styled'
import { RootState } from 'modules'
import { FocusTimerData } from './TimerRecord'

interface OwnProps {
  data: FocusTimerData
  title: string
}

export const FocusTimer: React.FC<OwnProps> = ({ data, title }) => {
  const TotalFocusTime = useSelector((state: RootState) => state.mode.isStudying)

  // Function to add leading zero if value is less than 10
  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <ContainerRecord>
      <HeaderRecord>{title}</HeaderRecord>
      <MainRecord>
        {addLeadingZero(data.hour)} : {addLeadingZero(data.minute)} : {addLeadingZero(data.second)}
      </MainRecord>
    </ContainerRecord>
  )
}
