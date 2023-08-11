//타이머 탭
import { useDispatch, useSelector } from 'react-redux'
import { TodoItemType } from 'types'
import { useState, FC, useEffect } from 'react'
import {
  Banner,
  Date,
  LowerDescriptionTypo,
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
  BannerContentWrapper,
  SizedBox,
} from './styled'

import { useFormattedDate } from 'utils/helper'
import { RootState } from 'modules'
import { StudyTimerWidget } from 'components/Timer/TimerWidget'
import TodoItem from 'components/Timer/TodoItem'
import AddModal from 'components/Timer/SubjectModal/AddModal'
import { DayValue } from 'react-modern-calendar-datepicker'
import { MainHistory } from 'components/Stats/HistoryChart/component/MainHistory'
import { CompareTip } from 'components/Stats/HistoryChart/component/CompareTip'
import { BumpGraph } from 'components/Stats/CompareChart'
import { initializeTimer } from 'modules/timer'

export const TimerPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formattedDate: string = useFormattedDate()
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  const openModal = (): void => {
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  const nowDay: DayValue = {
    year: 2023,
    month: 7,
    day: 31,
  }
  useEffect(() => {
    if (todos.length !== 0) {
      let sum = 0
      todos.forEach((todo) => {
        sum += todo.time
      })
      dispatch(initializeTimer(sum))
    }
  }, [todos])

  return (
    <Root>
      <Banner>
        <BannerContentWrapper>
          <LeftContainer>
            <LeftTopDescriptionWrapper>
              <Date>{formattedDate}</Date>
              <Title>오늘의 공부량 👏 </Title>
            </LeftTopDescriptionWrapper>
            <ResultContainer>
              <UpperDescriptionTypo>오늘의 공부량이에요!</UpperDescriptionTypo>
              <StudyTimerWidget />
              <LowerDescriptionTypo>
                오늘은 휴식 시간을 <YellowTypo>10시간 58분 35초</YellowTypo> 가졌네요!
              </LowerDescriptionTypo>
            </ResultContainer>
          </LeftContainer>
          <SizedBox />
          <RightContainer>
            <Title>오늘의 통계 📊</Title>
            <StatsContainer>
              {/* <HistoryChart selectedDate={nowDay} /> */}
              <MainHistory
                selectedDate={{
                  year: 0,
                  month: 0,
                  day: 0,
                }}
              />
              <CompareTip />
              <BumpGraph />
            </StatsContainer>
          </RightContainer>
        </BannerContentWrapper>
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
          {todos.map((todo: TodoItemType) => {
            return <TodoItem title={todo.name} key={todo.subjectId} todo={todo} buttonColor={todo.colorHex} />
          })}
        </TodoContainer>

        <AddButton onClick={openModal}>
          <PlusImg />
          과목
        </AddButton>
      </LowerContainer>
      <AddModal isModalOpen={isModalOpen} closeModal={closeModal} title="과목 추가"></AddModal>
    </Root>
  )
}
