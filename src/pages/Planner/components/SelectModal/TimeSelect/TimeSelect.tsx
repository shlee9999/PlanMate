import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'
import { useFormattedTime } from 'utils/helper'
import * as s from './styled'

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
  console.log(endAt)
  const value = set === '부터' ? startAt.slice(0, 2) : endAt.slice(0, 2) === '00' ? 24 : endAt.slice(0, 2)
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (set === '부터')
      dispatch(
        updateInfo({
          endAt: endAt,
          scheduleName: scheduleName,
          colorHex: bgColor,
          plannerId: id,
          startAt: useFormattedTime(+e.target.value * 60 * 60),
          day,
        })
      )
    else
      dispatch(
        updateInfo({
          startAt: startAt,
          endAt: useFormattedTime(+e.target.value * 60 * 60),
          scheduleName: scheduleName,
          colorHex: bgColor,
          plannerId: id,
          day,
        })
      )
  }

  return (
    <s.SelectWrapper>
      <s.StyledSelect onChange={handleHourChange} value={value.toString().padStart(2, '0')}>
        {Array.from(Array(25).keys()).map((hour) => (
          <s.SelectOption key={hour} value={hour.toString().padStart(2, '0')}>
            {hour.toString().padStart(2, '0')}
          </s.SelectOption>
        ))}
      </s.StyledSelect>
      <span>{set}</span>
    </s.SelectWrapper>
  )
}
