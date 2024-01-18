import React, { useState } from 'react'
import { getDateInfo, getYYYYMMDD, isEqualDate } from 'utils/helper'
import * as s from './styled'
import { useQuery } from 'react-query'
import { checkStats } from 'api/stats/checkStats'
import { ResponseStats } from 'api/common/commonType'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { CenterSpinner } from 'commonStyled'
import { Calendar, InfoContainer } from './components'
import { checkStatsMonthly } from 'api/stats/checkStatsMonthly'

export type DateProps = {
  year: number
  month: number
  date: number
}
const defaultStats = {
  endAtHours: 0,
  endAtMinutes: 0,
  maxStudyTimeHours: 0,
  maxStudyTimeMinutes: 0,
  maxStudyTimeSeconds: 0,
  restTimeHours: 0,
  restTimeMinutes: 0,
  restTimeSeconds: 0,
  startAtHours: 0,
  startAtMinutes: 0,
  studyTimeList: [
    {
      name: '',
      studyTimeHours: 0,
      studyTimeMinutes: 0,
      studyTimeSeconds: 0,
    },
  ],
  totalStudyTimeHours: 5,
  totalStudyTimeMinutes: 0,
  totalStudyTimeSeconds: 0,
}

export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(() => {
    const { year, month, date } = getDateInfo(new Date())
    return { year, month, date }
  })
  const { data: todayStats, isLoading: todayLoading } = useQuery<ResponseStats>(['todayStats'], () => checkTodayStats())
  const { data: selectedMonthStats, isLoading: isSelectedLoading } = useQuery<ResponseStats[]>(
    ['timeInfo', selectedDate.month + 1 + '월'],
    () =>
      checkStatsMonthly({
        yearMonth: getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
      })
  )
  const isToday = isEqualDate(selectedDate, getDateInfo(new Date()))
  const isLoading = isSelectedLoading || todayLoading
  const selectedDateData: ResponseStats = isLoading
    ? defaultStats
    : isToday
    ? todayStats
    : selectedMonthStats[selectedDate.date - 1]

  return (
    <s.Root>
      <s.HeaderContainer>
        <s.HeaderContentWrapper>
          <s.UserName>메이트 </s.UserName>
          <s.PageDescription>님의 공부량을 한눈에 볼 수 있어요!</s.PageDescription>
        </s.HeaderContentWrapper>
        <s.PageName>통계 📊</s.PageName>
      </s.HeaderContainer>
      <s.HeaderDividingLine />
      <s.Container>
        <s.Title>공부량 한 눈에 보기</s.Title>
        <s.StatsContainer>
          <s.LeftInfoBox left>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} dataSource={selectedMonthStats} />
            )}
          </s.LeftInfoBox>
          <s.RightInfoBox right>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <InfoContainer selectedDate={selectedDate} dataSource={selectedDateData} />
            )}
          </s.RightInfoBox>
        </s.StatsContainer>
      </s.Container>
    </s.Root>
  )
}
