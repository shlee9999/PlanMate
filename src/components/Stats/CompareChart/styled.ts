import styled from 'styled-components'

const MAIN_WRAPPER_WIDTH = 700
const MAIN_WRAPPER_HEIGHT = 170

const CHART_WRAPPER_HEIGHT = 140

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: ${MAIN_WRAPPER_WIDTH}px; */
  width: 100%;
  height: ${MAIN_WRAPPER_HEIGHT}px;
`

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${CHART_WRAPPER_HEIGHT}px;
  padding: 0px 6px 25px 6px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 110px;
  height: 20px;
`

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 30px;
  /* border: 1px solid black; */
`

export const LegendTitle = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #666666;
`

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const IconTodayDot = styled.img``

export const IconYesterdayDot = styled.img`
  margin: 4px 20px 0px 0px;
  width: 9px;
  height: 9px;
`
