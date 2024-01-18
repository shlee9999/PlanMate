import React from 'react'
import { timeUtils } from 'utils/helper'
import { Timer } from './Timer'
import { TimeProps } from 'types'
import * as s from './styled'

//총 공부시간, 최대 집중 시간

type TimerContainerProps = {
  type?: 'timer'
  totalFocusTime?: TimeProps
  maxFocusTime?: TimeProps
  startAt: TimeProps
  endAt: TimeProps
}
export const TimerContainer: React.FC<TimerContainerProps> = ({
  type,
  totalFocusTime,
  maxFocusTime,
  startAt,
  endAt,
}) => {
  return (
    <s.Root $type={type}>
      {totalFocusTime && <Timer title="총 공부시간" text={timeUtils.getFormattedTime(totalFocusTime)} />}
      {maxFocusTime && <Timer title="최대 집중 시간" text={timeUtils.getFormattedTime(maxFocusTime)} />}
      <Timer
        title="시작시간"
        text={startAt.hour.toString().padStart(2, '0') + '시 ' + startAt.minute.toString().padStart(2, '0') + '분'}
      />
      <Timer
        title="종료시간"
        text={endAt.hour.toString().padStart(2, '0') + '시 ' + endAt.minute.toString().padStart(2, '0') + '분'}
      />
    </s.Root>
  )
}
