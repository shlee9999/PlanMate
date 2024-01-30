//플래너 탭
import { FC } from 'react'
import * as s from './styled'

export const PlannerPage: FC = () => {
  return (
    <s.PlannerPage>
      <s.HeaderContainer>
        <s.HeaderMessage>
          안녕하세요! <span>메이트</span> 님!
        </s.HeaderMessage>
        <s.HeaderTitleLogo>플래너 🗓</s.HeaderTitleLogo>
      </s.HeaderContainer>
      <s.StyledScheduler />
    </s.PlannerPage>
  )
}
