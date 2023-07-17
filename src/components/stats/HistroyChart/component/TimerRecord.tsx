import React, { useState } from 'react'
import { FocusTimer } from './FocusTimer'
import { RecordTimer } from './RecordTimer'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

//총 공부시간, 최대 집중 시간
export interface FocusTimerData {
  hour: number
  minute: number
  second: number
}

const TotalFocusData: FocusTimerData = {
  hour: 4,
  minute: 32,
  second: 7,
}

const MaxFocusData: FocusTimerData = {
  hour: 2,
  minute: 32,
  second: 7,
}

//시작시간, 종료시간
export interface RecordTimerData {
  hour: number
  minute: number
}

const StartTimerData: RecordTimerData = {
  hour: 10,
  minute: 22,
}

const EndTimerData: RecordTimerData = {
  hour: 22,
  minute: 32,
}

export const TimerRecord: React.FC = () => {
  const [isTotalTimer, setTotalTimer] = useState<FocusTimerData>(TotalFocusData)

  //
  const TotalFocusTitle = '총 공부시간'
  const [isTotalTitle, setTotalTitle] = useState<string>(TotalFocusTitle)
  const MaxFocusTitle = '최대 집중 시간'
  const [isMaxFocusTitle, setMaxFocusTitle] = useState<string>(MaxFocusTitle)

  //
  const StartTimerTitle = '시작시간'
  const [isStartTitle, setStartTitle] = useState<string>(StartTimerTitle)
  const EndTimerTitle = '종료시간'
  const [isEndTitle, setEndTitle] = useState<string>(EndTimerTitle)

  return (
    <Container>
      <FocusTimer title={isTotalTitle} data={isTotalTimer} />
      <FocusTimer title={isMaxFocusTitle} data={MaxFocusData} />
      <RecordTimer title={isStartTitle} data={StartTimerData} />
      <RecordTimer title={isEndTitle} data={EndTimerData} />
    </Container>
  )
}
