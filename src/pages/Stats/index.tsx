import React, { useState } from 'react'
import { DayValue } from 'react-modern-calendar-datepicker'
import { getDateInfo } from 'utils/helper'
import {
  FooterContainer,
  HeaderContainer,
  HeaderContentWrapper,
  HeaderDividingLine,
  PageDescription,
  PageName,
  SNSLabel,
  Container,
  StatsContainer,
  Title,
  SNSItems,
  SNSItem,
  Root,
  ShareButton,
  UserName,
} from './styled'
import { InfoContainer } from 'pages/Stats/components/InfoContainer'
import { DatePicker } from 'pages/Stats/components/DatePicker'
import { InstagramIcon, KakaoIcon, ShareIcon, UrlIcon } from 'assets/SvgComponents'

export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DayValue>(() => {
    const { year, month, date: day } = getDateInfo(new Date())
    return { year, month: month + 1, day }
  })

  const handleDateSelect = (selectedDate: DayValue | null) => {
    setSelectedDate(selectedDate)
  }
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
          <DatePicker onDateSelect={handleDateSelect} />
          <InfoContainer selectedDate={selectedDate} />
        </StatsContainer>
      </Container>
      <FooterContainer>
        <ShareButton>
          <ShareIcon />
          <p>공유하기</p>
        </ShareButton>
        <SNSItems>
          <SNSItem>
            <UrlIcon />
            <SNSLabel>URL</SNSLabel>
          </SNSItem>
          <SNSItem>
            <KakaoIcon />
            <SNSLabel>카카오톡</SNSLabel>
          </SNSItem>
          <SNSItem>
            <InstagramIcon />
            <SNSLabel>인스타</SNSLabel>
          </SNSItem>
        </SNSItems>
      </FooterContainer>
    </Root>
  )
}
