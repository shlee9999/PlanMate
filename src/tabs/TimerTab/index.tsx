//타이머 탭
import { useSelector } from 'react-redux'
import TodoItem from 'components/TodoItem/index'
import { Globals, TodoItems } from 'types'
import { useState } from 'react'
import { FC } from 'react'
import {
  Banner,
  Date,
  LowerDescriptionTypo,
  ModeSelector,
  ModeSelectorWrapper,
  ResultContainer,
  Root,
  Title,
  TodoContainer,
  UpperDescriptionTypo,
  LeftTopDescriptionWrapper,
  YellowTypo,
  LeftContainer,
  StatsContainer,
  RightContainer,
  AddButton,
  PlusImg,
} from './styled'
import { StudyTimerWidget, ExerciseTimerWidget } from 'components/TimerWidget'
import { useFormattedDate } from 'utils/helper'
import SubjectModal from 'components/Modals/Modal'
import plusImg from 'assets/images/plus.png'

type TimerTabProps = {}

export const TimerTab: FC<TimerTabProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const store = useSelector((state: Globals) => state.todos)
  const [mode, setMode] = useState<string>('study')
  const formattedDate: string = useFormattedDate()
  const [modalTitle, setModalTitle] = useState<string>('')
  const openModal = (): void => {
    const modeName = mode === 'study' ? '과목' : '종목'
    setModalTitle(modeName + ' 추가')
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }
  const onClickModeSelector = (selectedMode: string) => () => {
    setMode(selectedMode)
  }
  return (
    <Root>
      <Banner>
        <LeftContainer>
          <LeftTopDescriptionWrapper>
            <Date>{formattedDate}</Date>
            <Title>오늘의 {mode === 'study' ? '공부' : '운동'}량 👏 </Title>
          </LeftTopDescriptionWrapper>
          <ModeSelectorWrapper>
            <ModeSelector onClick={onClickModeSelector('study')}>공부</ModeSelector>
            <ModeSelector onClick={onClickModeSelector('exercise')}>운동</ModeSelector>
          </ModeSelectorWrapper>
          <ResultContainer>
            <UpperDescriptionTypo>오늘의 {mode === 'study' ? '공부' : '운동'}량이에요!</UpperDescriptionTypo>
            {mode === 'study' ? <StudyTimerWidget /> : <ExerciseTimerWidget />}
            <LowerDescriptionTypo>
              오늘은 휴식 시간을 <YellowTypo>10시간 58분 35초</YellowTypo> 가졌네요!
            </LowerDescriptionTypo>
          </ResultContainer>
        </LeftContainer>
        <RightContainer>
          <Title>오늘의 통계 📊</Title>
          <StatsContainer></StatsContainer>
        </RightContainer>
      </Banner>
      <TodoContainer>
        {store.map(
          (todo: TodoItems) =>
            todo.category === mode && <TodoItem title={todo.title} key={todo.id} todo={todo} buttonColor={todo.color} />
        )}
      </TodoContainer>

      <AddButton onClick={openModal}>
        <PlusImg src={plusImg}></PlusImg>
        {mode === 'study' ? '과목' : '운동'}
      </AddButton>

      <SubjectModal todo={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </Root>
  )
}
