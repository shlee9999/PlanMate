import React, { useState } from 'react'
import { DayValue } from 'react-modern-calendar-datepicker'
import { getDateInfo } from 'utils/helper'
import {
  FooterContainer,
  HeaderContainer,
  HeaderContentWrapper,
  HeaderDividingLine,
  HeaderMessage,
  HeaderPageTitle,
  IconContents,
  MainContainer,
  MainContentsWrapper,
  MainHeaderTitle,
  MessengerButtonWrapper,
  MessengerContentsWrapper,
  Root,
  ShareButton,
  UserName,
} from './styled'
import { InfoContainer } from 'pages/Stats/components/InfoContainer'
import { StatsDatePicker } from 'pages/Stats/components/DatePicker'
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
          <HeaderMessage>님의 공부량을 한눈에 볼 수 있어요!</HeaderMessage>
        </HeaderContentWrapper>
        <HeaderPageTitle>통계 📊</HeaderPageTitle>
      </HeaderContainer>
      <HeaderDividingLine />
      <MainContainer>
        <MainHeaderTitle>공부량 한 눈에 보기</MainHeaderTitle>
        <MainContentsWrapper>
          <StatsDatePicker onDateSelect={handleDateSelect} />
          <InfoContainer selectedDate={selectedDate} />
        </MainContentsWrapper>
      </MainContainer>
      <FooterContainer>
        <ShareButton>
          <ShareIcon />
          <p>공유하기</p>
        </ShareButton>
        <MessengerButtonWrapper>
          <MessengerContentsWrapper>
            <UrlIcon />
            <IconContents>URL</IconContents>
          </MessengerContentsWrapper>
          <MessengerContentsWrapper>
            <KakaoIcon />
            <IconContents>카카오톡</IconContents>
          </MessengerContentsWrapper>
          <MessengerContentsWrapper>
            <InstagramIcon />
            <IconContents>인스타</IconContents>
          </MessengerContentsWrapper>
        </MessengerButtonWrapper>
      </FooterContainer>
    </Root>
  )
}
