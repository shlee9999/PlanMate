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

export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DayValue>(() => {
    const { year, month, date: day } = getDateInfo(new Date())
    return { year, month: month + 1, day }
  })

  // const handleDateSelect = (selectedDate: DayValue | null) => {
  //   setSelectedDate(selectedDate)
  // }
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
          {/* <DatePicker onDateSelect={handleDateSelect} /> */}
          <Calendar />
          <InfoContainer selectedDate={selectedDate} />
        </StatsContainer>
      </Container>
    </Root>
  )
}
