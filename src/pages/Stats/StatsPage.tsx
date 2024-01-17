import React, { useState } from 'react'
import { getDateInfo, getYYYYMMDD, isEqualDate } from 'utils/helper'
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
  LeftInfoBox,
  RightInfoBox,
} from './styled'
import { InfoContainer } from 'pages/Stats/components/InfoContainer'
import { Calendar } from './components/Calendar'
import { useQuery } from 'react-query'
import { checkStats } from 'api/stats/checkStats'
import { ResponseStats } from 'api/common/commonType'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { CenterSpinner } from 'commonStyled'

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
        <StatsContainer>
          <LeftInfoBox left>
            {todayLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} dataSource={data} />
            )}
          </LeftInfoBox>
          <RightInfoBox right>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <InfoContainer selectedDate={selectedDate} dataSource={data} />
            )}
          </RightInfoBox>
        </StatsContainer>
      </Container>
    </Root>
  )
}
