import React, { useState, ChangeEvent } from 'react'
import { StyledSelect, SelectOption, SelectWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'

type TimeSelectModeProps = {
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelect: React.FC<TimeSelectModeProps> = ({ set }) => {
  const defaultStartHour = useSelector((state: RootState) => state.selectedInfo.startDate.getHours())
  const defaultEndHour = useSelector((state: RootState) => state.selectedInfo.endDate.getHours())
  const dispatch = useDispatch()
  const { startDate, endDate, text, bgColor } = useSelector((state: RootState) => state.selectedInfo)
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = startDate.getFullYear()
    const month = startDate.getMonth()
    const date = startDate.getDate()
    if (set === '부터')
      dispatch(
        updateInfo({
          startDate: new Date(year, month, date, +e.target.value),
          endDate: new Date(year, month, date, endDate.getHours()),
          text,
          bgColor,
        })
      )
    else
      dispatch(
        updateInfo({
          startDate: new Date(year, month, date, startDate.getHours()),
          endDate: new Date(year, month, date, +e.target.value),
          text: '',
          bgColor: '',
        })
      )
  }

  return (
    <SelectWrapper>
      <StyledSelect
        onChange={handleHourChange}
        defaultValue={(set === '부터' ? defaultStartHour : defaultEndHour).toString().padStart(2, '0')}
      >
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
