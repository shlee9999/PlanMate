//타이머 탭
import { useDispatch, useSelector } from 'react-redux'
import { TodoItemType } from 'types'
import { useState, FC, useEffect } from 'react'
import {
  Banner,
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
  LowerContainer,
  CheerTypo,
  Test,
  Dday,
  GreenTypo,
  BannerContentWrapper,
  SizedBox,
  DateTypo,
} from './styled'

import { daysUntil, useFormattedDate, useFormattedTime, useFormattedTimeKorean } from 'utils/helper'
import { RootState } from 'modules'
import { StudyTimerWidget } from 'pages/Timer/components/TimerWidget'
import TodoItem from 'pages/Timer/components/TodoItem'
import AddModal from 'pages/Timer/components/SubjectModal/AddModal'
import { GraphContainer } from 'pages/Stats/components/InfoContainer/component/GraphContainer'
import { DayValue } from 'react-modern-calendar-datepicker'

import { initializeTimer } from 'modules/timer'
import { NoContentDescription } from 'components/NoContentDescription'
import { NoContentTypo } from 'components/NoContentDescription/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer } from 'hooks/useTimer'
import { SuggestModal } from 'pages/Timer/components/SuggestModal'
import { FindFixedScheduleResponseProps, findFixedSchedule } from 'api/schedule/findFixedSchedule'
import { PieChartBox } from 'pages/Stats/components/InfoContainer/component/PieChartContainer/PieChartContainer'

import { TimerContainer } from 'pages/Stats/components/InfoContainer/component/TimerContainer/TimerContainer'
import { StudyContainer } from 'pages/Stats/components/InfoContainer/styled'
import { PlusIcon } from 'assets/SvgComponents'
import { AnimatePresence } from 'framer-motion'
import { ModalWrapper, ModalWrapperVar } from 'commonStyled'
import { InfoBox } from 'components/InfoBox'

export const TimerPage: FC = () => {
  const location = useLocation()
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false)
  const [fixedDDay, setFixedDDay] = useState<FindFixedScheduleResponseProps>()
  const isTotalTimerRunning = useSelector((state: RootState) => state.timer.isRunning)
  const totalTime = useSelector((state: RootState) => state.timer.totalTime)
  const { startTimer, stopTimer, time: breakTime, setDefaultTime: setDefaultBreakTime } = useTimer({ defaultTime: 0 })
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formattedDate: string = useFormattedDate(new Date())
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  const openModal = (): void => {
    if (isTotalTimerRunning) return
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  const closeSuggestModal = (): void => {
    setIsSuggestModalOpen(false)
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

  useEffect(() => {
    findFixedSchedule().then((res) => {
      const response = res as FindFixedScheduleResponseProps
      if (response !== null) setFixedDDay(response)
      console.log(res)
    })
  }, [])

  useEffect(() => {
    const now = new Date()
    const newTime = new Date(now.getTime() - 5 * 60 * 60 * 1000 - totalTime * 1000).toString().split(' ')[4]
    const split = newTime.toString().split(':')
    setDefaultBreakTime(+split[0] * 60 * 60 + +split[1] * 60 + +split[2])
  }, [totalTime])

  useEffect(() => {
    if (isTotalTimerRunning) stopTimer()
    else startTimer()
  }, [isTotalTimerRunning])

  useEffect(() => {
    if (location.state) setIsSuggestModalOpen(true)
  }, [location.state])
  return (
    <Root>
      <Banner>
        <BannerContentWrapper>
          <LeftContainer>
            <LeftTopDescriptionWrapper>
              <DateTypo>{formattedDate}</DateTypo>
              <Title>오늘의 공부량 👏 </Title>
            </LeftTopDescriptionWrapper>
            <ResultContainer left>
              <UpperDescriptionTypo>오늘의 공부량이에요!</UpperDescriptionTypo>
              <StudyTimerWidget totalTime={totalTime} />
              <LowerDescriptionTypo>
                오늘은 휴식 시간을 <YellowTypo>{useFormattedTimeKorean(breakTime)}</YellowTypo> 가졌네요!
              </LowerDescriptionTypo>
            </ResultContainer>
          </LeftContainer>
          <SizedBox />
          <RightContainer>
            <Title>오늘의 통계 📊</Title>
            <StatsContainer right>
              <StudyContainer>
                {/* <TimerContainer /> */}
                <PieChartBox />
              </StudyContainer>
              <GraphContainer />
            </StatsContainer>
          </RightContainer>
        </BannerContentWrapper>
      </Banner>
      <LowerContainer>
        {fixedDDay ? (
          <CheerTypo>
            <Test>{fixedDDay.title} </Test>까지{' '}
            <Dday>
              D- <GreenTypo>{daysUntil(fixedDDay.date)}</GreenTypo>{' '}
            </Dday>
            조금만 더 힘을 내볼까요? 🏃
          </CheerTypo>
        ) : (
          <CheerTypo>
            아직 디데이가 없어요!{' '}
            <GreenTypo
              onClick={() => {
                navigate('/mypage')
              }}
              className="no_dday"
            >
              디데이를 설정하러 가볼까요?
            </GreenTypo>
          </CheerTypo>
        )}

        <TodoContainer className={todos.length === 0 ? 'no_content' : ''}>
          {todos.length !== 0 ? (
            todos.map((todo: TodoItemType) => {
              return <TodoItem title={todo.name} key={todo.subjectId} todo={todo} buttonColor={todo.colorHex} />
            })
          ) : (
            <NoContentDescription icon="book_check">
              <NoContentTypo>아직 공부할 과목이 없어요!</NoContentTypo>{' '}
              <NoContentTypo>일정을 설정해 과목을 추가해볼까요?</NoContentTypo>
            </NoContentDescription>
          )}
        </TodoContainer>

        <AddButton onClick={openModal}>
          <PlusIcon fill="currentColor" />
          과목
        </AddButton>
      </LowerContainer>

      <AddModal closeModal={closeModal} title="과목 추가" isOpen={isModalOpen} />

      {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
    </Root>
  )
}
