import * as s from './styled'
import { useState, FC, useEffect } from 'react'
import { TimeProps, TodoItemType } from 'types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer } from 'pages/Timer/hooks'
import { SuggestModal } from 'pages/Timer/components/'
import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { PlusIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { ResponseStats } from 'api/types'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { NoContentDescription, StatsContainer } from 'components'
import { ActionModal, TimerItem } from './components'
import { CenterSpinner } from 'commonStyled'
import { dateUtils, timeUtils } from 'utils'
import { QueryKeyType, StatsContainerType } from 'enums'

export const TimerPage: FC = () => {
  const now = dateUtils.getDateProps(new Date())
  const location = useLocation()
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false)
  const {
    setDefaultTime: setTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
    isRunning: isTotalTimerRunning,
  } = useTimer({ defaultTime: 0 })
  const { data, isLoading: isTodoLoading } = useQuery<StudyTimeResponseProps>([QueryKeyType.todoList], () =>
    studyTime()
  )
  const todoList: TodoItemType[] =
    data?.map((todo) => ({
      colorHex: todo.colorHex,
      name: todo.name,
      subjectId: todo.subjectId,
      time: timeUtils.timeToSecond({
        hour: todo.studyTimeHours,
        minute: todo.studyTimeMinutes,
        second: todo.studyTimeSeconds,
      }),
    })) || []
  const { data: todayStatsData, isLoading: isStatsLoading } = useQuery<ResponseStats>(
    [QueryKeyType.timeInfo, now],
    () => checkTodayStats()
  )
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>(['fixedDDay'], () => findFixedDday())
  const {
    startTimer: startBreakTimer,
    stopTimer: stopBreakTimer,
    time: breakTime,
    setDefaultTime: setDefaultBreakTime,
  } = useTimer({ defaultTime: 0 })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formattedDate: string = dateUtils.getFormattedDate(new Date())
  const navigate = useNavigate()
  const openModal = () => !isTotalTimerRunning && setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const closeSuggestModal = () => setIsSuggestModalOpen(false)
  const {
    restTimeHours = 0,
    restTimeMinutes = 0,
    restTimeSeconds = 0,
    totalStudyTimeHours = 0,
    totalStudyTimeMinutes = 0,
    totalStudyTimeSeconds = 0,
  } = todayStatsData || {}
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
  useEffect(() => {
    if (!isTodoLoading) {
      // * Todo 로딩 완료
      if (timeUtils.isEqualTime(totalStudyTime, { hour: 0, minute: 0, second: 0 })) stopBreakTimer()
    }
  }, [isTodoLoading])
  useEffect(() => {
    const newBreakTime = timeUtils.timeToSecond(restTime)
    setDefaultBreakTime(newBreakTime)
    setTotalTime(timeUtils.timeToSecond(totalStudyTime))
  }, [todayStatsData])

  //* 전체 타이머 실행 boolean 필요
  useEffect(() => {
    if (isTotalTimerRunning) stopBreakTimer()
    else {
      //총 공부 시간이 0이면
      startBreakTimer()
    }
  }, [isTotalTimerRunning])

  useEffect(() => {
    if (location.state) setIsSuggestModalOpen(true)
  }, [location.state])

  return (
    <>
      <s.Banner />
      <s.Root>
        <s.BannerContentContainer>
          <s.LeftContainer>
            <s.LeftTopDescriptionWrapper>
              <s.DateTypo>{formattedDate}</s.DateTypo>
              <s.Title>오늘의 공부량 👏 </s.Title>
            </s.LeftTopDescriptionWrapper>
            <s.StudyTimeContainer left>
              <s.Description>오늘의 공부량이에요!</s.Description>
              <s.TotalTimerContainer>
                <s.Mode>공부</s.Mode>
                <s.Timer>{timeUtils.getFormattedTime(totalTime)}</s.Timer>
              </s.TotalTimerContainer>
              <s.BreakTime>
                오늘은 휴식 시간을 <s.YellowTypo as="span">{timeUtils.getFormattedTimeKorean(breakTime)}</s.YellowTypo>{' '}
                가졌네요!
              </s.BreakTime>
            </s.StudyTimeContainer>
          </s.LeftContainer>
          <s.RightContainer>
            <s.Title>오늘의 통계 📊</s.Title>
            <s.StatsBox right>
              {isStatsLoading ? (
                <CenterSpinner>Loading...</CenterSpinner>
              ) : (
                <StatsContainer type={StatsContainerType.timer} dataSource={todayStatsData} />
              )}
            </s.StatsBox>
          </s.RightContainer>
        </s.BannerContentContainer>
        <s.LowerContainer>
          {fixedDDay && fixedDDay.remainingDays >= 0 ? (
            <s.CheerTypo>
              <s.Test>{fixedDDay.title}</s.Test>까지{' '}
              <s.Dday>
                D- <s.GreenTypo> {fixedDDay.remainingDays}</s.GreenTypo>{' '}
              </s.Dday>
              조금만 더 힘을 내볼까요? 🏃
            </s.CheerTypo>
          ) : (
            <s.CheerTypo>
              아직 디데이가 없어요!{' '}
              <s.GreenTypo
                onClick={() => {
                  navigate('/mypage')
                }}
                className="no_dday"
              >
                디데이를 설정하러 가볼까요?
              </s.GreenTypo>
            </s.CheerTypo>
          )}

          <s.TodoContainer className={todoList.length === 0 ? 'no_content' : ''}>
            {todoList.length !== 0 ? (
              todoList.map((todo: TodoItemType) => {
                return (
                  <TimerItem
                    title={todo.name}
                    key={todo.subjectId}
                    todo={todo}
                    buttonColor={todo.colorHex}
                    startTotalTimer={startTotalTimer}
                    stopTotalTimer={stopTotalTimer}
                    isTotalTimerRunning={isTotalTimerRunning}
                  />
                )
              })
            ) : isTodoLoading ? (
              <s.TodoSpinner>Loading..</s.TodoSpinner>
            ) : (
              <NoContentDescription
                descriptions={['아직 공부할 과목이 없어요!', '일정을 설정해 과목을 추가해볼까요?']}
                icon="book_check"
              />
            )}
          </s.TodoContainer>

          <s.AddButton onClick={openModal}>
            <PlusIcon />
            과목
          </s.AddButton>
        </s.LowerContainer>
        <ActionModal closeModal={closeModal} type="ADD" isOpen={isModalOpen} />
        {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
      </s.Root>
    </>
  )
}
