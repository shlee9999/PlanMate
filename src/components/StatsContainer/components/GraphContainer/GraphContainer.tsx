import React from 'react'
import * as s from './styled'
import todayDotImg from 'assets/images/today_dot.png'
import yesterdayDotImg from 'assets/images/yesterday_dot.png'
import { BumpGraph } from './BumphGraph'
import { CompareTitle } from './styled'
import { StatsContainerType } from 'enums'

type GraphContainerProps = {
  type: StatsContainerType
}
export const GraphContainer = ({ type }: GraphContainerProps) => {
  return type === StatsContainerType.stats ? (
    <s.StatsGraphContainer>
      <s.StatsTypoContainer>
        <CompareTitle>오후 7시까지의 비교</CompareTitle>
        <s.StatsCompareTimer>+ 00:30:13</s.StatsCompareTimer>
        <s.LegendContainer>
          <s.Container>
            <s.LegendTitle>오늘 </s.LegendTitle>
            <s.IconTodayDot alt="today_dot" src={todayDotImg} />
          </s.Container>
          <s.Container>
            <s.LegendTitle>어제</s.LegendTitle>
            <s.IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
          </s.Container>
        </s.LegendContainer>
      </s.StatsTypoContainer>
      <s.StatsGraphWrapper>
        <BumpGraph />
      </s.StatsGraphWrapper>
    </s.StatsGraphContainer>
  ) : (
    <s.TimerGraphContainer>
      <s.TimerTypoContainer>
        <CompareTitle>오후 7시까지의 비교</CompareTitle>
        <s.TimerCompareTimer>+ 00:30:13</s.TimerCompareTimer>
        <s.LegendContainer>
          <s.Container>
            <s.LegendTitle>오늘 </s.LegendTitle>
            <s.IconTodayDot alt="today_dot" src={todayDotImg} />
          </s.Container>
          <s.Container>
            <s.LegendTitle>어제</s.LegendTitle>
            <s.IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
          </s.Container>
        </s.LegendContainer>
      </s.TimerTypoContainer>
      <s.TimerGraphWrapper>
        <BumpGraph />
      </s.TimerGraphWrapper>
    </s.TimerGraphContainer>
  )
}
