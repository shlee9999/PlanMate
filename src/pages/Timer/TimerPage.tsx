import * as s from './styled'
import { FC, useEffect } from 'react'
import { QueryKeys, StatsContainerPages, TodoItemType } from 'types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTimer, useTimerEffects, useTodayStats, useTodoList } from 'pages/Timer/hooks'
import { SuggestModal } from 'pages/Timer/components/'
import { FindFixedDdayResponseProps, findFixedDday } from 'api/dday/findFixedDday'
import { PlusIcon } from 'assets/SvgComponents'
import { useQuery } from 'react-query'
import { NoContentDescription, StatsContainer } from 'components'
import { ActionModal, TimerItem } from './components'
import { CenterSpinner } from 'commonStyled'
import { dateUtils, timeUtils } from 'utils'
import { useModal } from 'hooks/useModal'

export const TimerPage: FC = () => {
  const { todoList, isTodoLoading } = useTodoList()
  const { data: fixedDDay } = useQuery<FindFixedDdayResponseProps>([QueryKeys.fixedDday], () => findFixedDday())
  const { todayStatsData, totalStudyTime, restTime, isStatsLoading } = useTodayStats()
  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal()
  const { isOpen: isSuggestModalOpen, openModal: openSuggestModal, closeModal: closeSuggestModal } = useModal()
  const {
    setDefaultTime: setTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    time: totalTime,
    isRunning: isTotalTimerRunning,
  } = useTimer({ defaultTime: 0 })
  const {
    startTimer: startBreakTimer,
    stopTimer: stopBreakTimer,
    time: breakTime,
    setDefaultTime: setDefaultBreakTime,
  } = useTimer({ defaultTime: 0 })
  const onClickAddButton = () => !isTotalTimerRunning && openAddModal()
  const navigate = useNavigate()
  const location = useLocation()

  //! 백엔드 remainingDays 안맞아서 내 로직 사용
  const remainingDays = dateUtils.daysUntil(dateUtils.getDateProps(fixedDDay?.targetDate))

  useTimerEffects({
    todayStatsData,
    totalStudyTime,
    restTime,
    setDefaultBreakTime,
    setTotalTime,
    isTodoLoading,
    stopBreakTimer,
    startBreakTimer,
    isTotalTimerRunning,
  })

  useEffect(() => {
    //* 건의사항 작성 시 잘 전송되었다는 알림 모달
    if (location.state) openSuggestModal()
  }, [location.state])

  return (
    <>
      <s.Banner />
      <s.Root>
        <s.BannerContentContainer>
          <s.LeftContainer>
            <s.LeftTopDescriptionWrapper>
              <s.DateTypo>{dateUtils.getFormattedDate(dateUtils.getTodayDateProps())}</s.DateTypo>
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
                <StatsContainer type={StatsContainerPages.timer} dataSource={todayStatsData} />
              )}
            </s.StatsBox>
          </s.RightContainer>
        </s.BannerContentContainer>
        <s.LowerContainer>
          {fixedDDay && remainingDays >= 0 ? (
            <s.CheerTypo>
              <s.Test>{fixedDDay.title}</s.Test>까지{' '}
              <s.Dday>
                D- <s.GreenTypo> {remainingDays}</s.GreenTypo>{' '}
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

          <s.AddButton onClick={onClickAddButton}>
            <PlusIcon />
            과목
          </s.AddButton>
        </s.LowerContainer>
        <ActionModal closeModal={closeAddModal} type="ADD" isOpen={isAddModalOpen} />
        {isSuggestModalOpen && <SuggestModal closeModal={closeSuggestModal} />}
      </s.Root>
    </>
  )
}
