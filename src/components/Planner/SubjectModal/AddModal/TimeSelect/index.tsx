import React, { useState, ChangeEvent } from 'react'
import { StyledSelect, SelectOption, SelectWrapper } from './styled'

type TimeSelectModeProps = {
  assignFromHour: (FromHour: number) => void
  assignFromMinute: (FromMinute: number) => void
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelect: React.FC<TimeSelectModeProps> = ({ assignFromHour, assignFromMinute }, { set }) => {
  //State관리 여기는 필요없음
  // const [selectedHour, setSelectedHour] = useState<number>(0)
  // const [selectedMinute, setSelectedMinute] = useState<number>(0)

  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const hourValue = Number(e.target.value)
    assignFromHour(hourValue)
    // setSelectedHour(hourValue)
  }

  const handleMinuteChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const minuteValue = Number(e.target.value)
    assignFromHour(minuteValue)
    // setSelectedMinute(Number(e.target.value))
  }

  //0~24까지 숫자 배열생성
  const hours = Array.from(Array(25).keys())

  return (
    <SelectWrapper>
      <StyledSelect onChange={handleHourChange}>
        {hours.map((hour) => (
          <SelectOption key={hour} value={hour.toString().padStart(2, '0')}>
            {hour.toString().padStart(2, '0')}
          </SelectOption>
        ))}
      </StyledSelect>
      <span>시</span>
      <StyledSelect onChange={handleMinuteChange}>
        <SelectOption value="00">00</SelectOption>
        <SelectOption value="20">20</SelectOption>
        <SelectOption value="40">40</SelectOption>
      </StyledSelect>
      <span>분 {set}</span>
    </SelectWrapper>
  )
}
