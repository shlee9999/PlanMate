import React from 'react'
import {
  Root,
  IconTodayDot,
  IconYesterdayDot,
  LegendTitle,
  LegendWrapper,
  MainContentWrapper,
  MainWrapper,
  GraphWrapper,
} from './styled'
import todayDotImg from 'assets/images/today_dot.png'
import yesterdayDotImg from 'assets/images/yesterday_dot.png'
import { BumpGraph } from './BumphGraph'

import { CompareTimer, CompareTitle } from '../../styled'

export const GraphContainer = () => {
  return (
    <Root>
      <CompareTitle>오후 7시까지의 비교</CompareTitle>
      <CompareTimer>+ 00:30:13</CompareTimer>
      <LegendWrapper>
        <MainContentWrapper>
          <LegendTitle>오늘 </LegendTitle>
          <IconTodayDot alt="today_dot" src={todayDotImg} />
        </MainContentWrapper>
        <MainContentWrapper>
          <LegendTitle>어제</LegendTitle>
          <IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
        </MainContentWrapper>
      </LegendWrapper>
      <GraphWrapper>
        <BumpGraph />
      </GraphWrapper>
    </Root>
  )
}
