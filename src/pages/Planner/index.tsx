//플래너 탭
import { FC } from 'react'
import { Root, HeaderContainer, HeaderMessage, HeaderTitleLogo } from './styled'
import { Scheduler } from 'pages/Planner/components/Scheduler'
import { useQuery } from 'react-query'
import { findPlanner } from 'api/planner/findPlanner'

export const PlannerPage: FC = () => {
  return (
    <Root>
      <HeaderContainer>
        <HeaderMessage>
          안녕하세요! <span>메이트</span> 님!
        </HeaderMessage>
        <HeaderTitleLogo>플래너 🗓</HeaderTitleLogo>
      </HeaderContainer>
      <Scheduler />
    </Root>
  )
}
