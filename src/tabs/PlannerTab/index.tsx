//플래너 탭
import { Main } from "components/Planner"
import { FC, useState } from 'react'

import {
  Root,
  HeaderContainer,
  HeaderTitleContainer,
  UserGreeting,
  HeaderTitleLogo,
  HeaderButton,
  MainContainer,
  MainNavContainer,
  MainWeeklyScheduler,
} from './styled'

export const PlannerTab: FC = () => {

  const [isButtonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setButtonHovered(true);
  }

  const handleMouseLeave = () => {
    setButtonHovered(false);
  }

  return (
    <Root>
      <HeaderContainer>
        <HeaderTitleContainer>
          <UserGreeting>
            안녕하세요!메이트 님!
          </UserGreeting>
          <HeaderTitleLogo>
            플래너
          </HeaderTitleLogo>
        </HeaderTitleContainer>
        <HeaderButton
          isButtonHovered={isButtonHovered}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          +일정 추가
        </HeaderButton>
      </HeaderContainer>
      <MainContainer>
        <MainNavContainer>
          4월 넷째주
        </MainNavContainer>
        <MainWeeklyScheduler>
          <Main></Main>
        </MainWeeklyScheduler>
      </MainContainer>
    </Root>
  )

}

export default PlannerTab
