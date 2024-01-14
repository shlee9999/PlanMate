import React, { useState } from 'react'
import { getDateInfo } from 'utils/helper'
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
import { ResponseStats } from 'api/common/commonType'

export type DateProps = {
  year: number
  month: number
  date: number
}
const dummyData: ResponseStats = {
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
  studyTimeList: [],
  totalStudyTimeHours: 0,
  totalStudyTimeMinutes: 0,
  totalStudyTimeSeconds: 0,
}
export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(() => {
    const { year, month, date } = getDateInfo(new Date())
    return { year, month, date }
  })
  const { data, isLoading } = useQuery<ResponseStats>(['timeInfo', selectedDate], () => checkStats(selectedDate), {
    initialData: dummyData,
  })

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
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} dataSource={data} />
          <InfoContainer selectedDate={selectedDate} dataSource={data} />
        </StatsContainer>
      </Container>
    </Root>
  )
}
