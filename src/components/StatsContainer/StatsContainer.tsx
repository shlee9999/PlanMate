import * as s from './styled'
import React, { useEffect } from 'react'
import { GraphContainer, PieChartContainer, StudyTimeContainer } from './components'
import { StatsContainerPages } from 'types'
import { StatsContainerType } from 'types'
import { useDispatch } from 'react-redux'
import { updateSelectedDate } from 'modules/selectedDate'
import { dateUtils } from 'utils'
import { StatsContainerHeader } from './StatsContainerHeader'

interface InfoContainerProps {
  type: StatsContainerType
}

export const StatsContainer: React.FC<InfoContainerProps> = ({ type }) => {
  const dispatch = useDispatch()
  const CommonContent = (
    <>
      <StudyTimeContainer type={type} />
      <PieChartContainer type={type} />
    </>
  )
  useEffect(() => {
    //* TimerPage는 오늘 정보만 보여줘야 함
    type === StatsContainerPages.timer && dispatch(updateSelectedDate(dateUtils.getTodayDateProps()))
  }, [])

  return type === StatsContainerPages.stats ? (
    //* StatsPage
    <s.StatsPageStatsContainer>
      <StatsContainerHeader />
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
    </s.StatsPageStatsContainer>
  ) : (
    //* TimerPage
    <s.TimerPageStatsContainer>
      <s.UpperContainer>{CommonContent}</s.UpperContainer>
      <GraphContainer type={type} />
    </s.TimerPageStatsContainer>
  )
}
