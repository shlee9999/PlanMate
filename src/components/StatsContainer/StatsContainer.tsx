import React from 'react'
import { GraphContainer, PieChartContainer, ShareContainer, TimerContainer } from './components'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import { TimeProps } from 'types'
import * as s from './styled'
import { dateUtils } from 'utils'
import { StatsContainerType } from 'enums'

interface InfoContainerProps {
  selectedDate?: DateProps
  dataSource: ResponseStats
  type: StatsContainerType
}

export const StatsContainer: React.FC<InfoContainerProps> = ({ selectedDate, dataSource, type }) => {
  const isStats = type === StatsContainerType.stats
  if (isStats && !selectedDate) return null //* stats의 경우에는 selectedDate가 필수
  const todayDateProps = dateUtils.getDateProps(new Date())
  const { year, month, date } = selectedDate || todayDateProps
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
  } = dataSource || {}
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
      {isStats && (
        <s.Header>
          {year}년 {month + 1}월 {date}일
        </s.Header>
      )}
      <s.StudyContainer>
        <TimerContainer
          totalFocusTime={totalStudyTime}
          maxFocusTime={maxFocusTime}
          startAt={startAt}
          endAt={endAt}
          type={type}
        />
        <PieChartContainer
          studyTimeList={studyTimeList}
          restTime={restTime}
          totalStudyTime={totalStudyTime}
          type={type}
        />
      </s.StudyContainer>
      {isStats && <s.ChartDividingLine />}
      <GraphContainer type={type} />
      {isStats && <ShareContainer />}
    </s.Root>
  )
}
