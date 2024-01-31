import React from 'react'
import * as s from './styled'
import { CenterSpinner } from 'commonStyled'
import { StatsContainerPages } from 'types'
import { StatsContainer } from 'components'
import { useStatsPage } from './useStatsPage'

export const StatsPage = () => {
  const { isLoading, selectedDate, setSelectedDate, selectedDateData, selectedMonthStats } = useStatsPage()
  return (
    <s.StatsPage>
      <s.HeaderContainer>
        <s.HeaderContentWrapper>
          <s.UserName>메이트 </s.UserName>
          <s.PageDescription>님의 공부량을 한눈에 볼 수 있어요!</s.PageDescription>
        </s.HeaderContentWrapper>
        <s.PageName>통계 📊</s.PageName>
      </s.HeaderContainer>
      <s.HeaderDividingLine />
      <s.Container>
        <s.Title>공부량 한 눈에 보기</s.Title>
        <s.MainContainer>
          <s.LeftInfoBox left>
            <s.StatsCalendar
              legend
              selectedDateProps={selectedDate}
              setSelectedDate={setSelectedDate}
              dataSource={selectedMonthStats}
              blockFuture
              todayButton
            />
          </s.LeftInfoBox>
          <s.RightInfoBox right>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <StatsContainer
                selectedDate={selectedDate}
                dataSource={selectedDateData}
                type={StatsContainerPages.stats}
              />
            )}
          </s.RightInfoBox>
        </s.MainContainer>
      </s.Container>
    </s.StatsPage>
  )
}
