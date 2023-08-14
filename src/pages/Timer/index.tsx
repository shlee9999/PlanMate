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
  PlusImg,
  LowerContainer,
  CheerTypo,
  Test,
  Dday,
  GreenTypo,
  BannerContentWrapper,
  SizedBox,
  DateTypo,
} from './styled'

import { useFormattedDate, useFormattedTime, useFormattedTimeKorean } from 'utils/helper'
import { RootState } from 'modules'
import { StudyTimerWidget } from 'components/Timer/TimerWidget'
import TodoItem from 'components/Timer/TodoItem'
import AddModal from 'components/Timer/SubjectModal/AddModal'
import { MainHistory } from 'components/Stats/HistoryChart/component/MainHistory'
import { CompareChart } from 'components/Stats/CompareChart'
import { DayValue } from 'react-modern-calendar-datepicker'

import { CompareTip } from 'components/Stats/HistoryChart/component/CompareTip'

import { initializeTimer } from 'modules/timer'
import { NoContentDescription } from 'components/common/NoContentDescription'
import bookCheckImg from 'assets/images/book_check.png'
import { NoContentTypo } from 'components/common/NoContentDescription/styled'
import { FindClosestScheduleResponseProps, findClosestSchedule } from 'api/schedule/findClosestSchedule'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer } from 'hooks/useTimer'
import { SuggestModal } from 'components/Timer/SuggestModal'

export const TimerPage: FC = () => {
  const location = useLocation()
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false)
  const isTotalTimerRunning = useSelector((state: RootState) => state.timer.isRunning)
  const totalTime = useSelector((state: RootState) => state.timer.totalTime)
  const { startTimer, stopTimer, time: breakTime, setDefaultTime: setDefaultBreakTime } = useTimer({ defaultTime: 0 })
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [closestDDay, setClosestDDay] = useState<number>()
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
    findClosestSchedule().then((res) => {
      const response = res as FindClosestScheduleResponseProps
      setClosestDDay(response.dday)
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
            <ResultContainer>
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
            <StatsContainer>
              <MainHistory
                selectedDate={{
                  year: 0,
                  month: 0,
                  day: 0,
                }}
              />
              <CompareChart />
            </StatsContainer>
          </RightContainer>
        </BannerContentWrapper>
      </Banner>
      <LowerContainer>
        {closestDDay ? (
          <CheerTypo>
            <Test>감평사 시험 </Test>까지{' '}
            <Dday>
              D- <GreenTypo>{closestDDay}</GreenTypo>{' '}
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
            <NoContentDescription src={bookCheckImg}>
              <NoContentTypo>아직 공부할 과목이 없어요!</NoContentTypo>{' '}
              <NoContentTypo>일정을 설정해 과목을 추가해볼까요?</NoContentTypo>
            </NoContentDescription>
          )}
        </TodoContainer>

        <AddButton onClick={openModal}>
          <PlusImg />
          과목
        </AddButton>
      </LowerContainer>
      <AddModal isModalOpen={isModalOpen} closeModal={closeModal} title="과목 추가" />
      {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
    </Root>
  )
}
