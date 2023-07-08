import React, { useState, ChangeEvent } from 'react'
import { StyledSelect, SelectOption, SelectWrapper } from '../TimeSelect/styled'

//옵션 시간 추가 필요요
export const TimeSelect: React.FC = () => {
  const [selectedHour, setSelectedHour] = useState<string>('')
  const [selectedMinute, setSelectedMinute] = useState<string>('')

  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(e.target.value)
  }

  const handleMinuteChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinute(e.target.value)
  }

  //0~24까지 숫자 배열생성
  const hours = Array.from(Array(25).keys())

  return (
    <SelectWrapper>
      <StyledSelect value={selectedHour} onChange={handleHourChange}>
        {hours.map((hour) => (
          <SelectOption key={hour} value={hour.toString().padStart(2, '0')}>
            {hour.toString().padStart(2, '0')}
          </SelectOption>
        ))}
      </StyledSelect>
      <span>시</span>
      <StyledSelect value={selectedMinute} onChange={handleMinuteChange}>
        <SelectOption value="00">00</SelectOption>
        <SelectOption value="20">20</SelectOption>
        <SelectOption value="40">40</SelectOption>
      </StyledSelect>
      <span>분 부터</span>
    </SelectWrapper>
  )
}
