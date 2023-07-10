//플래너 탭
import Main from 'components/Planner/Calendar/WeeklyCalendar'
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

import SubjectModal from 'components/ModalsPlanner/SubjectModal'

export const PlannerPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const [mode, setMode] = useState<string>('study')

  const openModal = (): void => {
    const modeName = mode === 'study' ? '과목' : '종목'
    setModalTitle(modeName + '추가')
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  const [isButtonHovered, setButtonHovered] = useState(false)

  const handleMouseEnter = () => {
    setButtonHovered(true)
  }

  const handleMouseLeave = () => {
    setButtonHovered(false)
  }

  return (
    <Root>
      <HeaderContainer>
        <HeaderTitleContainer>
          <UserGreeting>안녕하세요!메이트 님!</UserGreeting>
          <HeaderTitleLogo>플래너</HeaderTitleLogo>
        </HeaderTitleContainer>
        <HeaderButton
          isButtonHovered={isButtonHovered}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          onClick={openModal}
        >
          +일정 추가
        </HeaderButton>
      </HeaderContainer>
      <MainContainer>
        <MainNavContainer>4월 넷째주</MainNavContainer>
        <MainWeeklyScheduler>
          <Main></Main>
        </MainWeeklyScheduler>
      </MainContainer>

      <SubjectModal todo={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </Root>
  )
}

export default PlannerPage
