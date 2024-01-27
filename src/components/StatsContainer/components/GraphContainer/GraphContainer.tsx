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
  return (
    <s.Root>
      <s.TypoContainer>
        <CompareTitle>오후 7시까지의 비교</CompareTitle>
        <s.CompareTimer>+ 00:30:13</s.CompareTimer>
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
      </s.TypoContainer>
      <s.StatsGraphWrapper $type={type}>
        <BumpGraph />
      </s.StatsGraphWrapper>
    </s.Root>
  )
}
