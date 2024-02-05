import * as s from './styled'
import React, { useEffect } from 'react'
import { GraphContainer, PieChartContainer, ShareContainer, StudyTimeContainer } from './components'
import { StatsContainerPages } from 'types'
import { StatsContainerType } from 'types'
import { useSelectedData } from 'pages/Stats/hooks/useSelectedData'
import { useDispatch } from 'react-redux'
import { updateSelectedDate } from 'modules/selectedDate'
import { dateUtils } from 'utils'

interface InfoContainerProps {
  type: StatsContainerType
}

export const StatsContainer: React.FC<InfoContainerProps> = ({ type }) => {
  const { selectedDate, totalStudyTime, restTime, maxFocusTime, startAt, endAt, studyTimeList } = useSelectedData()
  const dispatch = useDispatch()
  const { year, month, date } = selectedDate
  const CommonContent = (
    <>
      <StudyTimeContainer {...{ totalFocusTime: totalStudyTime, maxFocusTime, startAt, endAt, type }} />
      <PieChartContainer {...{ studyTimeList, restTime, totalStudyTime, type }} />
    </>
  )
  useEffect(() => {
    //* TimerPage는 오늘 정보만 보여줘야 함
    type === StatsContainerPages.timer && dispatch(updateSelectedDate(dateUtils.getTodayDateProps()))
  }, [])

  return type === StatsContainerPages.stats ? (
    //* StatsPage
    <s.StatsPageStatsContainer>
      <s.Header>
        {year}년 {month}월 {date}일
      </s.Header>
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
      <ShareContainer />
    </s.StatsPageStatsContainer>
  ) : (
    //* TimerPage
    <s.TimerPageStatsContainer>
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
    </s.TimerPageStatsContainer>
  )
}
