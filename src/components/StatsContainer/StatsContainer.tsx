import * as s from './styled'
import React from 'react'
import { GraphContainer, PieChartContainer, ShareContainer, StudyTimeContainer } from './components'
import { DateProps, StatsContainerPages } from 'types'
import { ResponseStats } from 'api/types'
import { dateUtils } from 'utils'
import { StatsContainerType } from 'types'
import { useTodayStats } from 'pages/Timer/hooks'

interface InfoContainerProps {
  selectedDate?: DateProps
  dataSource?: ResponseStats
  type: StatsContainerType
}

export const StatsContainer: React.FC<InfoContainerProps> = ({ selectedDate, dataSource, type }) => {
  if ((type === StatsContainerPages.stats && !selectedDate) || (type === StatsContainerPages.stats && !dataSource))
    return null
  const { todayStatsData: timerDataSource } = useTodayStats()
  const dateProps = selectedDate || dateUtils.getDateProps(new Date())
  const { year, month, date } = dateProps
  const {
    endAtHours = 0,
    endAtMinutes = 0,
    maxStudyTimeHours = 0,
    maxStudyTimeMinutes = 0,
    maxStudyTimeSeconds = 0,
    restTimeHours = 0,
    restTimeMinutes = 0,
    restTimeSeconds = 0,
    startAtHours = 0,
    startAtMinutes = 0,
    studyTimeList = [],
    totalStudyTimeHours = 0,
    totalStudyTimeMinutes = 0,
    totalStudyTimeSeconds = 0,
  } = type === StatsContainerPages.timer ? timerDataSource || {} : dataSource || {}

  const totalStudyTime = { hour: totalStudyTimeHours, minute: totalStudyTimeMinutes, second: totalStudyTimeSeconds }
  const restTime = { hour: restTimeHours, minute: restTimeMinutes, second: restTimeSeconds }
  const maxFocusTime = { hour: maxStudyTimeHours, minute: maxStudyTimeMinutes, second: maxStudyTimeSeconds }
  const startAt = { hour: startAtHours, minute: startAtMinutes }
  const endAt = { hour: endAtHours, minute: endAtMinutes }

  const CommonContent = (
    <>
      <StudyTimeContainer {...{ totalFocusTime: totalStudyTime, maxFocusTime, startAt, endAt, type }} />
      <PieChartContainer {...{ studyTimeList, restTime, totalStudyTime, type }} />
    </>
  )

  return type === StatsContainerPages.stats ? (
    <s.StatsPageStatsContainer>
      <s.Header>
        {year}년 {month + 1}월 {date}일
      </s.Header>
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
      <ShareContainer />
    </s.StatsPageStatsContainer>
  ) : (
    <s.TimerPageStatsContainer>
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
    </s.TimerPageStatsContainer>
  )
}
