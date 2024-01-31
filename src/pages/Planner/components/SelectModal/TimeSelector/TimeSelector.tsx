import * as s from './styled'
import React from 'react'
import { useTimeSelector } from './useTimeSelector'

type TimeSelectorModeProps = {
  set: string
}

//옵션 시간 추가 필요요
export const TimeSelector: React.FC<TimeSelectorModeProps> = ({ set }) => {
  const { handleHourChange, value } = useTimeSelector({ set })
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
