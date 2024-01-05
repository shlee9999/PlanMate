//플래너 탭
import { FC, useState } from 'react'
import {
  Root,
  HeaderContainer,
  HeaderContentWrapper,
  HeaderMessage,
  HeaderTitleLogo,
  HeaderButton,
  MainContainer,
  MainNavContainer,
  MainWeeklyScheduler,
} from './styled'
import SubjectModal from 'components/Planner/SubjectModal'
import { Scheduler } from 'components/Planner/Scheduler'

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
        <HeaderContentWrapper>
          <HeaderMessage>안녕하세요!메이트 님!</HeaderMessage>
          <HeaderTitleLogo>플래너 🗓</HeaderTitleLogo>
        </HeaderContentWrapper>
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
          <Scheduler />
        </MainWeeklyScheduler>
      </MainContainer>

      <SubjectModal todoplan={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </Root>
  )
}
