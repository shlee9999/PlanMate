import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`

const MainWrapper = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface CircleProps {
  border?: string
  color?: string
}

const Circle = styled.div<CircleProps>`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  border: ${({ border }) => border || '1px solid #d9d9d9'};
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`

const Time = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #888888;
`

export const DatePickerFooter: React.FC = () => {
  return (
    <Container>
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
    </Container>
  )
}
