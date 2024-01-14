import React from 'react'
import { Root, ChartDividingLine, Header, StudyContainer } from './styled'
import { GraphContainer } from './component/GraphContainer'

import { PieChartContainer } from './component/PieChartContainer/PieChartContainer'
import { TimeProps, TimerContainer } from './component/TimerContainer/TimerContainer'
import { ShareContainer } from './component/ShareContainer'
import { DateProps } from 'pages/Stats'
import { ResponseStats } from 'api/common/commonType'

interface InfoContainerProps {
  selectedDate: DateProps
  dataSource: ResponseStats
}

const TotalFocusData: TimeProps = {
  hour: 4,
  minute: 32,
  second: 7,
}

const MaxFocusData: TimeProps = {
  hour: 2,
  minute: 32,
  second: 7,
}

const StartTimerData: TimeProps = {
  hour: 10,
  minute: 22,
}

const EndTimerData: TimeProps = {
  hour: 22,
  minute: 32,
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
  } = data
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
    <Root right={true}>
      <Header>
        {year}년 {month + 1}월 {date}일
      </Header>
      <StudyContainer>
        <TimerContainer totalFocusTime={totalStudyTime} maxFocusTime={maxFocusTime} startAt={startAt} endAt={endAt} />
        <PieChartContainer studyTimeList={studyTimeList} restTime={restTime} totalStudyTime={totalStudyTime} />
      </StudyContainer>
      <ChartDividingLine />
      <GraphContainer />
      <ShareContainer />
    </Root>
  )
}
