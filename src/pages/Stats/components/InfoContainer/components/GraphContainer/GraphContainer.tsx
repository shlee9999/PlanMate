import React from 'react'
import * as s from './styled'
import todayDotImg from 'assets/images/today_dot.png'
import yesterdayDotImg from 'assets/images/yesterday_dot.png'
import { BumpGraph } from './BumphGraph'

import { CompareTimer, CompareTitle } from '../../styled'

export const GraphContainer = () => {
  return (
    <s.Root>
      <CompareTitle>오후 7시까지의 비교</CompareTitle>
      <CompareTimer>+ 00:30:13</CompareTimer>
      <s.LegendWrapper>
        <s.MainContentWrapper>
          <s.LegendTitle>오늘 </s.LegendTitle>
          <s.IconTodayDot alt="today_dot" src={todayDotImg} />
        </s.MainContentWrapper>
        <s.MainContentWrapper>
          <s.LegendTitle>어제</s.LegendTitle>
          <s.IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
        </s.MainContentWrapper>
      </s.LegendWrapper>
      <s.GraphWrapper>
        <BumpGraph />
      </s.GraphWrapper>
    </s.Root>
  )
}
