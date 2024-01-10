import styled from 'styled-components'

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const Root = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  padding-top: 10px;
`
export const GraphWrapper = styled.div`
  position: relative;
  bottom: 20px;
  width: 100%;
  height: 80px;
`
export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 6px 25px 6px;
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
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: ${(props) => props.theme.text.gray1};
`

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const IconTodayDot = styled.img``

export const IconYesterdayDot = styled.img`
  margin: 4px 20px 0px 0px;
  width: 9px;
  height: 9px;
`
