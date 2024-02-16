import { FlexRow, H12_500, P12, P14 } from 'commonStyled'
import styled from 'styled-components'

//LegendWrapper 이미지 적용 후, 사이즈 조정 필요

export const StatsGraphContainer = styled.div`
  //! Display on = "DESKTOP"으로 반응형 만들 시 그래프가 보이지 않는 문제
  @media screen and (${(props) => props.theme.medium}) {
    min-height: 0;
    height: 100px;
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
    top: -20px;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.background.gray1};
    @media screen and (${(props) => props.theme.medium}) {
      display: none;
    }
  }
`
export const StatsGraphWrapper = styled.div`
  bottom: -10px;
  min-height: 180px;
  margin-left: 20px;
  width: calc(100% - 30px);
  position: relative;
  top: 15px; //* 이렇게 해야 그래프만 보고 조절 가능
  @media screen and (${(props) => props.theme.medium}) {
    min-height: 120px;
    margin-left: 0;
    width: 100%;
  }
`
export const TimerGraphContainer = styled.div`
  //! Display on = "DESKTOP"으로 반응형 만들 시 그래프가 보이지 않는 문제
  position: relative;
  top: 20px;
  @media screen and (${(props) => props.theme.medium}) {
    min-height: 0;
    height: 100px;
  }
  flex-grow: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* background-color: yellow; */
`

export const TimerGraphWrapper = styled.div`
  bottom: 45px;
  height: 116px;
  position: relative;
  margin-left: 30px;

  top: 0px; //* 이렇게 해야 그래프만 보고 조절 가능
  /* background-color: tomato; */
  @media screen and (${(props) => props.theme.medium}) {
    min-height: 120px;
    margin-left: 0;
    width: 100%;
  }
`

export const StatsTypoContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
  @media screen and (${(props) => props.theme.medium}) {
    //* 모바일에선 중앙으로 이동하고, 제목만 보여줌
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`
export const TimerTypoContainer = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  @media screen and (${(props) => props.theme.medium}) {
    //* 모바일에선 중앙으로 이동하고, 제목만 보여줌
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`
export const CompareTitle = styled.div`
  ${P14}
  position: relative;
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 4px;
`
// export const StatsCompareTimer = styled.div`
//   ${H12_500}
//   color: ${(props) => props.theme.text.black2};
//   margin-bottom: 16px;
//   @media screen and (${(props) => props.theme.medium}) {
//     opacity: 0;
//   }
// `
// export const TimerCompareTimer = styled.div`
//   ${H12_500}
//   color: ${(props) => props.theme.text.black2};
//   margin-bottom: 5px;
//   @media screen and (${(props) => props.theme.medium}) {
//     opacity: 0;
//   }
// `
export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
`

export const LegendTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  @media screen and (${(props) => props.theme.medium}) {
    opacity: 0;
  }
`

export const Container = styled(FlexRow)`
  gap: 4px;
`

export const IconTodayDot = styled.img`
  width: 35px;
  @media screen and (${(props) => props.theme.medium}) {
    opacity: 0;
  }
`

export const IconYesterdayDot = styled.img`
  width: 9px;
`
