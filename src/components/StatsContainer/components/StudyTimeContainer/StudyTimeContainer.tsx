import React from 'react'
import { StudyTime } from './StudyTime'
import { TimeProps } from 'types'
import { timeUtils } from 'utils'
import * as s from './styled'

//총 공부시간, 최대 집중 시간

type StudyTimeContainerProps = {
  type?: 'timer'
  totalFocusTime?: TimeProps
  maxFocusTime?: TimeProps
  startAt: TimeProps
  endAt: TimeProps
}
export const StudyTimeContainer: React.FC<StudyTimeContainerProps> = ({
  type,
  totalFocusTime,
  maxFocusTime,
  startAt,
  endAt,
}) => {
  return (
    <s.Root $type={type}>
      {totalFocusTime && <StudyTime title="총 공부시간" text={timeUtils.getFormattedTime(totalFocusTime)} />}
      {maxFocusTime && <StudyTime title="최대 집중 시간" text={timeUtils.getFormattedTime(maxFocusTime)} />}
      <StudyTime
        title="시작시간"
        text={startAt.hour.toString().padStart(2, '0') + '시 ' + startAt.minute.toString().padStart(2, '0') + '분'}
      />
      <StudyTime
        title="종료시간"
        text={endAt.hour.toString().padStart(2, '0') + '시 ' + endAt.minute.toString().padStart(2, '0') + '분'}
      />
    </s.Root>
  )
}
