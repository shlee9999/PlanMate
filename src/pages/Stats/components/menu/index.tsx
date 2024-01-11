import React, { useState } from 'react'
import { InfoContainer } from '../InfoContainer'
import {
  Root,
  HeaderContainer,
  HeaderContentWrapper,
  UserName,
  HeaderMessage,
  HeaderPageTitle,
  MainContainer,
  MainHeaderTitle,
  MainContentsWrapper,
  FooterContainer,
  IconVector,
  ShareButton,
  MessengerButtonWrapper,
  MessengerContentsWrapper,
  IconURl,
  IconKakaoTalk,
  IconInstagram,
  IconContents,
  HeaderDividingLine,
  SizedBox,
} from './styled'
import vectorImg from 'assets/images/vector.png'
import urlImg from 'assets/images/url.png'
import instagramImg from 'assets/images/instagram.png'
import kakaoTalkImg from 'assets/images/kakaoTalk.png'
import { DatePicker } from '../DatePicker'
import { DayValue } from 'react-modern-calendar-datepicker'
import { getDateInfo } from 'utils/helper'

export const MenuBox = () => {
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
          <DatePicker onDateSelect={handleDateSelect} />
          <SizedBox />
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
