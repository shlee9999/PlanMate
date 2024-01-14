import React, { useState, ChangeEvent, useEffect } from 'react'
import { StyledSelect, SelectOption, SelectWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'

type TimeSelectModeProps = {
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelect: React.FC<TimeSelectModeProps> = ({ set }) => {
  const dispatch = useDispatch()
  const { startDate, endDate, text, colorHex: bgColor, id } = useSelector((state: RootState) => state.selectedInfo)
  const value = set === '부터' ? startDate.getHours() : endDate.getHours() === 0 ? 24 : endDate.getHours()
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = startDate.getFullYear()
    const month = startDate.getMonth()
    const date = startDate.getDate()
    if (set === '부터')
      dispatch(
        updateInfo({
          endDate,
          text,
          colorHex: bgColor,
          id,
          startDate: new Date(year, month, date, +e.target.value),
        })
      )
    else
      dispatch(
        updateInfo({
          startDate,
          endDate: new Date(year, month, date, +e.target.value),
          text,
          colorHex: bgColor,
          id,
        })
      )
  }

  return (
    <SelectWrapper>
      <StyledSelect onChange={handleHourChange} value={value.toString().padStart(2, '0')}>
        {Array.from(Array(25).keys()).map((hour) => (
          <SelectOption key={hour} value={hour.toString().padStart(2, '0')}>
            {hour.toString().padStart(2, '0')}
          </SelectOption>
        ))}
      </StyledSelect>
      <span>{set}</span>
    </SelectWrapper>
  )
}
