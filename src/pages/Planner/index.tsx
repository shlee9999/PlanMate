//플래너 탭
import { FC } from 'react'
import { Root, HeaderContainer, HeaderContentWrapper, HeaderMessage, HeaderTitleLogo, MainContainer } from './styled'
import { Scheduler } from 'pages/Planner/components/Scheduler'

export const PlannerPage: FC = () => {
  return (
    <Root>
      <HeaderContainer>
        <HeaderContentWrapper>
          <HeaderMessage>
            안녕하세요! <span>메이트</span> 님!
          </HeaderMessage>
          <HeaderTitleLogo>플래너 🗓</HeaderTitleLogo>
        </HeaderContentWrapper>
      </HeaderContainer>
      <MainContainer>
        <Scheduler />
      </MainContainer>
    </Root>
  )
}
