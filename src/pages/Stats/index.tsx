import React, { useState } from 'react'
import vectorImg from 'assets/images/vector.png'
import urlImg from 'assets/images/url.png'
import instagramImg from 'assets/images/instagram.png'
import kakaoTalkImg from 'assets/images/kakaoTalk.png'
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
  IconInstagram,
  IconKakaoTalk,
  IconURl,
  IconVector,
  MainContainer,
  MainContentsWrapper,
  MainHeaderTitle,
  MessengerButtonWrapper,
  MessengerContentsWrapper,
  Root,
  ShareButton,
  UserName,
} from './styled'
import { InfoContainer } from 'components/Stats/InfoContainer'
import { StatsDatePicker } from 'components/Stats/DatePicker'

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
          <IconVector alt="vector_icon" src={vectorImg} />
          <p>공유하기</p>
        </ShareButton>
        <MessengerButtonWrapper>
          <MessengerContentsWrapper>
            <IconURl alt="url_icon" src={urlImg} />
            <IconContents>URL</IconContents>
          </MessengerContentsWrapper>
          <MessengerContentsWrapper>
            <IconKakaoTalk alt="kakaoTalk_icon" src={kakaoTalkImg} />
            <IconContents>카카오톡</IconContents>
          </MessengerContentsWrapper>
          <MessengerContentsWrapper>
            <IconInstagram alt="instagram_icon" src={instagramImg} />
            <IconContents>인스타</IconContents>
          </MessengerContentsWrapper>
        </MessengerButtonWrapper>
      </FooterContainer>
    </Root>
  )
}
