import React from 'react'
import { DatePickerFooterWrapper, MainWrapper, Circle, Time } from './styled'

export const DatePickerFooter: React.FC = () => {
  return (
    <DatePickerFooterWrapper>
      <MainWrapper>
        <Circle color="white" />
        <Time>0~3시간</Time>
      </MainWrapper>
      <MainWrapper>
        <Circle color="#01CB451A" border="1px solid white" />
        <Time>4~7시간</Time>
      </MainWrapper>
      <MainWrapper>
        <Circle color="#01CB4599" border="1px solid white" />
        <Time>8~11시간</Time>
      </MainWrapper>
      <MainWrapper>
        <Circle color="#01CB45" border="1px solid white" />
        <Time>12시간 이상</Time>
      </MainWrapper>
    </DatePickerFooterWrapper>
  )
}
