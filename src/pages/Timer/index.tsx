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
  TodoSpinner,
} from './styled'
import { daysUntil, getDateInfo, timeToSecond, useFormattedDate, useFormattedTimeKorean } from 'utils/helper'
import { RootState } from 'modules'
import { StudyTimerWidget } from 'pages/Timer/components/TimerWidget'
import TodoItem from 'pages/Timer/components/TodoItem'
import ActionModal from 'pages/Timer/components/ActionModal'
import { GraphContainer } from 'pages/Stats/components/InfoContainer/component/GraphContainer'
import { initializeTimer } from 'modules/timer'
import { NoContentDescription } from 'components/NoContentDescription'
import { NoContentTypo } from 'components/NoContentDescription/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer } from 'pages/Timer/hooks/useTimer'
import { SuggestModal } from 'pages/Timer/components/SuggestModal'
import { FindFixedScheduleResponseProps, findFixedSchedule } from 'api/schedule/findFixedSchedule'
import { PieChartContainer } from 'pages/Stats/components/InfoContainer/component/PieChartContainer/PieChartContainer'
import { TimeProps, TimerContainer } from 'pages/Stats/components/InfoContainer/component/TimerContainer/TimerContainer'
import { StudyContainer } from 'pages/Stats/components/InfoContainer/styled'
import { PlusIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { ResponseStats } from 'api/common/commonType'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { CenterSpinner } from 'commonStyled'

export const TimerPage: FC = () => {
  const now = getDateInfo(new Date())
  const location = useLocation()
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false)
  const [fixedDDay, setFixedDDay] = useState<FindFixedScheduleResponseProps>()
  const { data, isLoading: isTodoLoading } = useQuery<StudyTimeResponseProps>(['todoList'], () => studyTime())
  const todoList: TodoItemType[] = isTodoLoading
    ? []
    : data.map((todo) => ({
        colorHex: todo.colorHex,
        name: todo.name,
        subjectId: todo.subjectId,
        time: timeToSecond({ hour: todo.studyTimeHours, minute: todo.studyTimeMinutes, second: todo.studyTimeSeconds }),
      }))
  const { data: statsData, isLoading: isStatsLoading } = useQuery<ResponseStats>(['timeInfo', now], () =>
    checkTodayStats()
  )
  const { isRunning, totalTime } = useSelector((state: RootState) => state.timer)
  const { startTimer, stopTimer, time: breakTime, setDefaultTime: setDefaultBreakTime } = useTimer({ defaultTime: 0 })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formattedDate: string = useFormattedDate(new Date())
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const openModal = (): void => {
    if (!isRunning) setIsModalOpen(true)
  }
  const closeModal = (): void => setIsModalOpen(false)
  const closeSuggestModal = (): void => setIsSuggestModalOpen(false)

  const {
    endAtHours,
    endAtMinutes,
    restTimeHours,
    restTimeMinutes,
    restTimeSeconds,
    startAtHours,
    startAtMinutes,
    studyTimeList,
    totalStudyTimeHours,
    totalStudyTimeMinutes,
    totalStudyTimeSeconds,
  } = statsData || {}
  const totalStudyTime: TimeProps = {
    hour: totalStudyTimeHours,
    minute: totalStudyTimeMinutes,
    second: totalStudyTimeSeconds,
  }
  const restTime: TimeProps = {
    hour: restTimeHours,
    minute: restTimeMinutes,
    second: restTimeSeconds,
  }

  const startAt: TimeProps = {
    hour: startAtHours,
    minute: startAtMinutes,
  }
  const endAt: TimeProps = {
    hour: endAtHours,
    minute: endAtMinutes,
  }
  useEffect(() => {
    if (!isTodoLoading) {
      let sum = 0
      todoList.forEach((todo) => {
        sum += todo.time
      })
      dispatch(initializeTimer(sum))
    }
  }, [isTodoLoading])

  useEffect(() => {
    findFixedSchedule().then((res) => {
      const response = res as FindFixedScheduleResponseProps
      if (response !== null) setFixedDDay(response)
    })
  }, [])

  useEffect(() => {
    const now = new Date()
    const newTime = new Date(now.getTime() - 5 * 60 * 60 * 1000 - totalTime * 1000).toString().split(' ')[4]
    const split = newTime.toString().split(':')
    setDefaultBreakTime(+split[0] * 60 * 60 + +split[1] * 60 + +split[2])
  }, [totalTime])

  useEffect(() => {
    if (isRunning) stopTimer()
    else startTimer()
  }, [isRunning])

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
              {isStatsLoading ? (
                <CenterSpinner>Loading...</CenterSpinner>
              ) : (
                <>
                  <StudyContainer>
                    <TimerContainer startAt={startAt} endAt={endAt} type="timer" />
                    <PieChartContainer
                      studyTimeList={studyTimeList}
                      restTime={restTime}
                      totalStudyTime={totalStudyTime}
                    />
                  </StudyContainer>
                  <GraphContainer />
                </>
              )}
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

        <TodoContainer className={todoList.length === 0 ? 'no_content' : ''}>
          {todoList.length !== 0 ? (
            todoList.map((todo: TodoItemType) => {
              return <TodoItem title={todo.name} key={todo.subjectId} todo={todo} buttonColor={todo.colorHex} />
            })
          ) : isTodoLoading ? (
            <TodoSpinner>Loading..</TodoSpinner>
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

      <ActionModal closeModal={closeModal} type="ADD" isOpen={isModalOpen} />

      {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
    </Root>
  )
}
