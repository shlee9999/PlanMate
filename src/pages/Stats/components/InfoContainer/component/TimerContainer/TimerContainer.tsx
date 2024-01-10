import React, { useState } from 'react'
import { useFormattedTime, useFormattedTimeKorean } from 'utils/helper'
import { Timer } from './Timer'
import { Root } from './styled'

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

export const TimerContainer: React.FC = () => {
  const [totalTime, setTotalTime] = useState<FocusTimerData>(TotalFocusData)

  //
  const TotalFocusTitle = '총 공부시간'
  const [totalTitle, setTotalTitle] = useState<string>(TotalFocusTitle)
  const MaxFocusTitle = '최대 집중 시간'
  const [maxFocusTitle, setMaxFocusTitle] = useState<string>(MaxFocusTitle)

  //
  const StartTimerTitle = '시작시간'
  const [startTitle, setStartTitle] = useState<string>(StartTimerTitle)
  const EndTimerTitle = '종료시간'
  const [endTitle, setEndTitle] = useState<string>(EndTimerTitle)

  return (
    <Root>
      <Timer title={totalTitle} text={useFormattedTime(totalTime)} />
      <Timer title={maxFocusTitle} text={useFormattedTime(MaxFocusData)} />
      <Timer title={startTitle} text={useFormattedTimeKorean(StartTimerData)} />
      <Timer title={endTitle} text={useFormattedTimeKorean(EndTimerData)} />
    </Root>
  )
}
