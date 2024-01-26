import { P12 } from 'commonStyled'
import { styled } from 'styled-components'

export const StatsRoot = styled.div`
  display: flex;
  height: fit-content;
  justify-content: end;
`
export const TStatsRoot = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: start;
  row-gap: 10px;
  margin-bottom: 10px;
`
export const MStatsRoot = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: start;
  row-gap: 20px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const PiechartTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 15px;
`
