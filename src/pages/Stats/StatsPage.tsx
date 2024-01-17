import React, { useState } from 'react'
import { getDateInfo, getYYYYMMDD, isEqualDate } from 'utils/helper'
import * as s from './styled'
import { useQuery } from 'react-query'
import { checkStats } from 'api/stats/checkStats'
import { ResponseStats } from 'api/common/commonType'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { CenterSpinner } from 'commonStyled'
import { Calendar, InfoContainer } from './components'

export type DateProps = {
  year: number
  month: number
  date: number
}

export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(() => {
    const { year, month, date } = getDateInfo(new Date())
    return { year, month, date }
  })
  const { data: todayStats, isLoading: todayLoading } = useQuery<ResponseStats>(['todayStats'], () => checkTodayStats())
  const { data: selectedDateStats, isLoading: isSelectedLoading } = useQuery<ResponseStats>(
    ['timeInfo', getYYYYMMDD(selectedDate)],
    () => checkStats(selectedDate)
  )

  const isToday = isEqualDate(selectedDate, getDateInfo(new Date()))
  const data = isToday ? todayStats : selectedDateStats
  const isLoading = todayLoading || isSelectedLoading

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
            {todayLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} dataSource={data} />
            )}
          </s.LeftInfoBox>
          <s.RightInfoBox right>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <InfoContainer selectedDate={selectedDate} dataSource={data} />
            )}
          </s.RightInfoBox>
        </s.StatsContainer>
      </s.Container>
    </s.Root>
  )
}
