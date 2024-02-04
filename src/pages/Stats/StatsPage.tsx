import React from 'react'
import * as s from './styled'
import { MainContainer } from './components'

export const StatsPage = () => {
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
        <MainContainer />
      </s.Container>
    </s.StatsPage>
  )
}
