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
import { TodoContainer } from './components/TodoContainer/TodoContainer'

export const TimerPage: FC = () => {
  const {
    fixedDDay,
    remainingDays,
    onClickGreenTypo,
    isStatsLoading,
    isAddModalOpen,
    closeAddModal,
    todayStatsData,
    openAddModal,
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

          <TodoContainer />
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
