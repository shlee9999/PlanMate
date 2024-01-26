import { FlexRow, P10, P12, P14 } from 'commonStyled'
import styled from 'styled-components'
import { BumpGraph } from './BumphGraph'
import { StatsContainerType } from 'enums'

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const Root = styled.div`
  flex-grow: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
`
export const StatsGraphWrapper = styled.div<{ $type: StatsContainerType }>`
  bottom: ${(props) => (props.$type === StatsContainerType.timer ? '45px' : '-10px')};
  height: 100%;
  margin-left: 20px; //todo 그래프 하단에 배치중
  width: calc(100% - 30px);
`

export const CompareTitle = styled.div`
  ${P14}
  position: relative;
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 4px;
`

export const TypoContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
`
export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
`

export const LegendTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
`

export const Container = styled(FlexRow)`
  gap: 4px;
`

export const IconTodayDot = styled.img`
  width: 35px;
`

export const IconYesterdayDot = styled.img`
  width: 9px;
`

export const StyledBumpGraph = styled(BumpGraph)`
  background-color: tomato;
  height: 300px;
`
