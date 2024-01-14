import React, { useState } from 'react'
import { getDateInfo, getYYYYMMDD } from 'utils/helper'
import {
  HeaderContainer,
  HeaderContentWrapper,
  HeaderDividingLine,
  PageDescription,
  PageName,
  Container,
  StatsContainer,
  Title,
  Root,
  UserName,
} from './styled'
import { InfoContainer } from 'pages/Stats/components/InfoContainer'
import { Calendar } from './components/Calendar'
import { DayValue } from 'react-modern-calendar-datepicker'
import { useQuery } from 'react-query'
import { checkStats } from 'api/stats/checkStats'
import { ResponseStats, defaultStats } from 'api/common/commonType'
import { checkTodayStats } from 'api/stats/checkTodayStats'

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
  const isToday = selectedDate === getDateInfo(new Date())
  const data = (isToday ? todayStats : selectedDateStats) || defaultStats
  const isLoading = isSelectedLoading ? todayLoading : isSelectedLoading
  return (
    <Root>
      <HeaderContainer>
        <HeaderContentWrapper>
          <UserName>메이트 </UserName>
          <PageDescription>님의 공부량을 한눈에 볼 수 있어요!</PageDescription>
        </HeaderContentWrapper>
        <PageName>통계 📊</PageName>
      </HeaderContainer>
      <HeaderDividingLine />
      <Container>
        <Title>공부량 한 눈에 보기</Title>
        {!isLoading && (
          <StatsContainer>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} dataSource={data} />
            <InfoContainer selectedDate={selectedDate} dataSource={data} isLoading={isLoading} />
          </StatsContainer>
        )}
      </Container>
    </Root>
  )
}
