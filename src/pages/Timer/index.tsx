//타이머 탭
import { useDispatch, useSelector } from 'react-redux'

import { TodoItems } from 'types'
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
  LowerContainer,
  CheerTypo,
  Test,
  Dday,
  GreenTypo,
} from './styled'

import { useFormattedDate } from 'utils/helper'

import { RootState } from 'modules'
import { exercise, study } from 'modules/mode'
import SubjectModal from 'components/Timer/SubjectModal'
import { StudyTimerWidget } from 'components/Timer/TimerWidget/StudyTimerWidget'
import { ExerciseTimerWidget } from 'components/Timer/TimerWidget/ExerciseTimerWidget'
import TodoItem from 'components/Timer/TodoItem'

export const TimerPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [mode, setMode] = useState<string>('study')
  const formattedDate: string = useFormattedDate()
  const [modalTitle, setModalTitle] = useState<string>('')
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  const openModal = (): void => {
    const modeName = mode === 'study' ? '과목' : '종목'
    setModalTitle(modeName + '추가')
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }
  const onClickModeSelector = (selectedMode: string) => () => {
    if (isRunning) return
    if (selectedMode === 'study') dispatch(study())
    else dispatch(exercise())
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
      <LowerContainer>
        <CheerTypo>
          <Test>감평사 시험 </Test>까지{' '}
          <Dday>
            D- <GreenTypo>191</GreenTypo>{' '}
          </Dday>
          조금만 더 힘을 내볼까요? 🏃
        </CheerTypo>
        <TodoContainer>
          {todos.map(
            (todo: TodoItems) =>
              todo.type === mode && (
                <TodoItem title={todo.name} key={todo.subjectId} todo={todo} buttonColor={todo.colorHex} />
              )
          )}
        </TodoContainer>

        <AddButton onClick={openModal}>
          <PlusImg />
          {mode === 'study' ? '과목' : '종목'}
        </AddButton>
      </LowerContainer>

      <SubjectModal todo={null} title={modalTitle} isModalOpen={isModalOpen} closeModal={closeModal}></SubjectModal>
    </Root>
  )
}
