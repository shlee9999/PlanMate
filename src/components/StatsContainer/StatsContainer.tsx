import React from 'react'
import { GraphContainer, PieChartContainer, ShareContainer, StudyTimeContainer } from './components'
import { DateProps } from 'types'
import { ResponseStats } from 'api/types'
import * as s from './styled'
import { dateUtils } from 'utils'
import { StatsContainerType } from 'enums'
import { Display } from 'components/Display/Display'

interface InfoContainerProps {
  selectedDate?: DateProps
  dataSource: ResponseStats
  type: StatsContainerType
}

export const StatsContainer: React.FC<InfoContainerProps> = ({ selectedDate, dataSource, type }) => {
  if (type === StatsContainerType.stats && !selectedDate) return null

  const dateProps = selectedDate || dateUtils.getDateProps(new Date())
  const { year, month, date } = dateProps
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

  return type === StatsContainerType.stats ? (
    <s.StatsRoot>
      <s.Header>
        {year}년 {month + 1}월 {date}일
      </s.Header>
      <s.StudyContainer>{CommonContent}</s.StudyContainer>
      <Display on="DESKTOP">
        <s.ChartDividingLine />
      </Display>
      <GraphContainer type={type} />
      <ShareContainer />
    </s.StatsRoot>
  ) : (
    <s.TimerRoot>
      <s.StudyContainer>{CommonContent}</s.StudyContainer>
      <GraphContainer type={type} />
    </s.TimerRoot>
  )
}
