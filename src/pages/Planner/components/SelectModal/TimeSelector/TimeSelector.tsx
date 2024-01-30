import * as s from './styled'
import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { updateInfo } from 'modules/selectedInfo'
import { timeUtils } from 'utils'

type TimeSelectorModeProps = {
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelector: React.FC<TimeSelectorModeProps> = ({ set }) => {
  const dispatch = useDispatch()
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const value = set === '부터' ? startAt.slice(0, 2) : endAt.slice(0, 2) === '00' ? 24 : endAt.slice(0, 2)
  const handleHourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (set === '부터')
      dispatch(
        updateInfo({
          endAt: endAt,
          scheduleName: scheduleName,
          colorHex,
          plannerId,
          startAt: timeUtils.getFormattedTime(+e.target.value * 60 * 60),
          day,
        })
      )
    else
      dispatch(
        updateInfo({
          startAt: startAt,
          endAt: timeUtils.getFormattedTime(+e.target.value * 60 * 60),
          scheduleName: scheduleName,
          colorHex,
          plannerId,
          day,
        })
      )
  }

  return (
    <s.TimerSelector>
      <s.StyledSelect onChange={handleHourChange} value={value.toString().padStart(2, '0')}>
        {Array.from(Array(25).keys()).map((hour) => (
          <s.SelectOption key={hour} value={hour.toString().padStart(2, '0')}>
            {hour.toString().padStart(2, '0')}
          </s.SelectOption>
        ))}
      </s.StyledSelect>
      <span>{set}</span>
    </s.TimerSelector>
  )
}