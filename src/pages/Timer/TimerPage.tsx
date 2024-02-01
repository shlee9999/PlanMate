import * as s from './styled'
import { FC, useCallback, useState } from 'react'
import { StatsContainerPages, TodoItemType } from 'types'
import { PlusIcon } from 'assets/SvgComponents'
import { NoContentDescription, StatsContainer } from 'components'
import { ActionModal, TimerItem } from './components'
import { CenterSpinner } from 'commonStyled'
import { dateUtils } from 'utils'
import { useTimerPage } from './useTimerPage'
import { TotalTimer } from './components/TotalTimer/TotalTimer'
import { RestTimer } from './components/RestTimer/RestTimer'
import React from 'react'

export const TimerPage: FC = () => {
  const {
    todoList,
    fixedDDay,
    remainingDays,
    onClickGreenTypo,
    isStatsLoading,
    isAddModalOpen,
    closeAddModal,
    todayStatsData,
    openAddModal,
    isTodoLoading,
  } = useTimerPage()
  return (
    <>
      <s.Banner />
      <s.TimerPage>
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
                <TotalTimer />
              </s.TotalTimerContainer>
              <RestTimer />
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
              <s.GreenTypo onClick={onClickGreenTypo} className="no_dday">
                디데이를 설정하러 가볼까요?
              </s.GreenTypo>
            </s.CheerTypo>
          )}

          <s.TodoContainer className={todoList.length === 0 ? 'no_content' : ''}>
            {todoList.length !== 0 ? (
              todoList.map((todo: TodoItemType) => {
                return <TimerItem key={todo.subjectId} todo={todo} />
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
          <s.AddButton onClick={openAddModal}>
            <PlusIcon />
            과목
          </s.AddButton>
        </s.LowerContainer>
        <ActionModal closeModal={closeAddModal} type="ADD" isOpen={isAddModalOpen} />
      </s.TimerPage>
    </>
  )
}
