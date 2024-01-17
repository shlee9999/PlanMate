import React, { useState, ChangeEvent, useEffect } from 'react'
import { StyledSelect, SelectOption, SelectWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'
import { getYYYYMMDD, useFormattedTime } from 'utils/helper'

type TimeSelectModeProps = {
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelect: React.FC<TimeSelectModeProps> = ({ set }) => {
  const dispatch = useDispatch()
  const {
    startAt,
    endAt,
    scheduleName,
    colorHex: bgColor,
    plannerId: id,
    day,
  } = useSelector((state: RootState) => state.selectedInfo)
  const value = set === '부터' ? startAt.slice(0, 2) : endAt.slice(0, 2) === '00' ? 24 : endAt.slice(0, 2)
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (set === '부터')
      dispatch(
        updateInfo({
          endAt: endAt,
          scheduleName: scheduleName,
          colorHex: bgColor,
          plannerId: id,
          startAt: useFormattedTime(+e.target.value),
          day,
        })
      )
    else
      dispatch(
        updateInfo({
          startAt: startAt,
          endAt: useFormattedTime(+e.target.value),
          scheduleName: scheduleName,
          colorHex: bgColor,
          plannerId: id,
          day,
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
