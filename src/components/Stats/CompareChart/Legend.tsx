import React from 'react'
import { LegendWrapper, IconTodayDot, IconYesterdayDot, MainContentWrapper, LegendTitle } from './styled'
import todayDotImg from 'assets/images/today_dot.png'
import yesterdayDotImg from 'assets/images/yesterday_dot.png'

export const Legend: React.FC = () => {
  return (
    <LegendWrapper>
      <MainContentWrapper>
        <LegendTitle>오늘 </LegendTitle>
        <IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
      </MainContentWrapper>
      <MainContentWrapper>
        <LegendTitle>어제</LegendTitle>
        <IconYesterdayDot alt="yesterday_dot" src={yesterdayDotImg} />
      </MainContentWrapper>
    </LegendWrapper>
  )
}
