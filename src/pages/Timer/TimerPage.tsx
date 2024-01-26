//타이머 탭
import { useDispatch, useSelector } from 'react-redux'
import { TimeProps, TodoItemType } from 'types'
import { useState, FC, useEffect } from 'react'
import { RootState } from 'modules'
import { initializeTimer } from 'modules/timer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer } from 'pages/Timer/hooks'
import { SuggestModal } from 'pages/Timer/components/'
import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { PlusIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { ResponseStats } from 'api/types'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { NoContentDescription } from 'components'
import { TimerContainer, PieChartContainer, GraphContainer } from 'pages/Stats/components/'
import { StudyContainer } from 'components/StatsContainer/styled'
import { ActionModal, TimerWidget, TodoItem } from './components'
import { CenterSpinner } from 'commonStyled'
import { dateUtils, timeUtils } from 'utils'
import * as s from './styled'

export const TimerPage: FC = () => {
  const now = dateUtils.getDateProps(new Date())
  const location = useLocation()
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false)
  const { data, isLoading: isTodoLoading } = useQuery<StudyTimeResponseProps>(['todoList'], () => studyTime())
  const todoList: TodoItemType[] = isTodoLoading
    ? []
    : data.map((todo) => ({
        colorHex: todo.colorHex,
        name: todo.name,
        subjectId: todo.subjectId,
        time: timeUtils.timeToSecond({
          hour: todo.studyTimeHours,
          minute: todo.studyTimeMinutes,
          second: todo.studyTimeSeconds,
        }),
      }))
  const { data: statsData, isLoading: isStatsLoading } = useQuery<ResponseStats>(['timeInfo', now], () =>
    checkTodayStats()
  )
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>(['fixedDDay'], () => findFixedDday())
  const { isRunning, totalTime } = useSelector((state: RootState) => state.timer)
  const { startTimer, stopTimer, time: breakTime, setDefaultTime: setDefaultBreakTime } = useTimer({ defaultTime: 0 })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formattedDate: string = dateUtils.getFormattedDate(new Date())
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
    const newTime = timeUtils.timeToSecond(restTime)
    setDefaultBreakTime(newTime)
  }, [totalTime, isStatsLoading])

  useEffect(() => {
    if (isRunning) stopTimer()
    else startTimer()
  }, [isRunning])

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
              <TimerWidget totalTime={totalTime} />
              <s.BreakTime>
                오늘은 휴식 시간을 <s.YellowTypo as="span">{timeUtils.getFormattedTimeKorean(breakTime)}</s.YellowTypo>{' '}
                가졌네요!
              </s.BreakTime>
            </s.StudyTimeContainer>
          </s.LeftContainer>
          <s.RightContainer>
            <s.Title>오늘의 통계 📊</s.Title>
            <s.StatsContainer right>
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
                  <GraphContainer type="timer" />
                </>
              )}
            </s.StatsContainer>
          </s.RightContainer>
        </s.BannerContentContainer>
        <s.LowerContainer>
          {fixedDDay ? (
            <s.CheerTypo>
              <s.Test as="span">{/* {fixedDDay.title} */}가나다</s.Test>까지{' '}
              <s.Dday as="span">
                D- <s.GreenTypo>{/* {dateUtils.daysUntil(fixedDDay.targetDate)} */}30</s.GreenTypo>{' '}
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
                return <TodoItem title={todo.name} key={todo.subjectId} todo={todo} buttonColor={todo.colorHex} />
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
            <PlusIcon fill="currentColor" />
            과목
          </s.AddButton>
        </s.LowerContainer>
        <ActionModal closeModal={closeModal} type="ADD" isOpen={isModalOpen} />
        {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
      </s.Root>
    </>
  )
}
