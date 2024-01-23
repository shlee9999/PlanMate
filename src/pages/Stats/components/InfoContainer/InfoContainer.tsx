import React from 'react'
import * as s from './styled'
import { GraphContainer, PieChartContainer, ShareContainer, TimerContainer } from './components'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import { TimeProps } from 'types'

interface InfoContainerProps {
  selectedDate: DateProps
  dataSource: ResponseStats
}

export const InfoContainer: React.FC<InfoContainerProps> = ({ selectedDate, dataSource: data }) => {
  const { year, month, date } = selectedDate
  const {
    endAtHours,
    endAtMinutes,
    maxStudyTimeHours,
    maxStudyTimeMinutes,
    maxStudyTimeSeconds,
    restTimeHours,
    restTimeMinutes,
    restTimeSeconds,
    startAtHours,
    startAtMinutes,
    studyTimeList,
    totalStudyTimeHours,
    totalStudyTimeMinutes,
    totalStudyTimeSeconds,
  } = data || {}
  const totalStudyTime: TimeProps = {
    hour: totalStudyTimeHours,
    minute: totalStudyTimeMinutes,
    second: totalStudyTimeSeconds,
  }
  const restTime: TimeProps = {
    hour: restTimeHours,
    minute: restTimeMinutes,
    second: restTimeSeconds,
  }
  const maxFocusTime: TimeProps = {
    hour: maxStudyTimeHours,
    minute: maxStudyTimeMinutes,
    second: maxStudyTimeSeconds,
  }
  const startAt: TimeProps = {
    hour: startAtHours,
    minute: startAtMinutes,
  }
  const endAt: TimeProps = {
    hour: endAtHours,
    minute: endAtMinutes,
  }

  return (
    <s.Root>
      <s.Header>
        {year}년 {month + 1}월 {date}일
      </s.Header>
      <s.StudyContainer>
        <TimerContainer totalFocusTime={totalStudyTime} maxFocusTime={maxFocusTime} startAt={startAt} endAt={endAt} />
        <PieChartContainer studyTimeList={studyTimeList} restTime={restTime} totalStudyTime={totalStudyTime} />
      </s.StudyContainer>
      <s.ChartDividingLine />
      <GraphContainer />
      <ShareContainer />
    </s.Root>
  )
}
