import { FlexRow, P12, P14 } from 'commonStyled'
import styled from 'styled-components'
import { StatsContainerType } from 'enums'

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const Root = styled.div`
  //! Display on = "DESKTOP"으로 반응형 만들 시 그래프가 보이지 않는 문제
  @media screen and (${(props) => props.theme.mobile}) {
    display: none;
  }
  flex-grow: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 20px;
  &::before {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.background.gray1};
    margin: 0 0 30px 0;
  }
`
export const StatsGraphWrapper = styled.div<{ $type: StatsContainerType }>`
  bottom: ${(props) => (props.$type === StatsContainerType.timer ? '45px' : '-10px')};
  min-height: 180px;
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
