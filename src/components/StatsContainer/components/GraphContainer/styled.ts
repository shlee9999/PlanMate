import { FlexRow, P10, P12 } from 'commonStyled'
import styled from 'styled-components'
import { BumpGraph } from './BumphGraph'
import { StatsContainerType } from 'enums'

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const Root = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  padding-top: 10px;
`
export const GraphWrapper = styled.div<{ $type: StatsContainerType }>`
  position: relative;
  bottom: ${(props) => (props.$type === StatsContainerType.timer ? '45px' : '-10px')};
  width: 105%;
  height: ${(props) => (props.$type === StatsContainerType.timer ? '80px' : '110px')};
  right: 50px;
`

export const CompareTitle = styled.div<{ $type: StatsContainerType }>`
  ${P12}
  position: relative;
  bottom: ${(props) => (props.$type === StatsContainerType.timer ? '15px' : '0px')};
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  /* border: 1px solid black; */
`

export const LegendTitle = styled.p`
  ${P10}
  color: ${(props) => props.theme.text.gray1};
`

export const Container = styled(FlexRow)`
  gap: 4px;
`

export const IconTodayDot = styled.img``

export const IconYesterdayDot = styled.img`
  margin: 4px 20px 0px 0px;
  width: 9px;
  height: 9px;
`

export const StyledBumpGraph = styled(BumpGraph)`
  background-color: tomato;
  height: 300px;
`
