import React from 'react'
import * as s from './styled'
import { StudyTime } from './StudyTime'
import { TimeProps } from 'types'
import { timeUtils } from 'utils'
import { StatsContainerType } from 'enums'

//총 공부시간, 최대 집중 시간

type StudyTimeContainerProps = {
  type: StatsContainerType
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
    <s.StatsStudyTimeContainer $type={type}>
      {type === StatsContainerType.stats && (
        <StudyTime title="총 공부시간" text={timeUtils.getFormattedTime(totalFocusTime)} />
      )}
      {type === StatsContainerType.stats && (
        <StudyTime title="최대 집중 시간" text={timeUtils.getFormattedTime(maxFocusTime)} />
      )}
      <StudyTime
        title="시작시간"
        text={startAt.hour.toString().padStart(2, '0') + '시 ' + startAt.minute.toString().padStart(2, '0') + '분'}
      />
      <StudyTime
        title="종료시간"
        text={endAt.hour.toString().padStart(2, '0') + '시 ' + endAt.minute.toString().padStart(2, '0') + '분'}
      />
    </s.StatsStudyTimeContainer>
  )
}
