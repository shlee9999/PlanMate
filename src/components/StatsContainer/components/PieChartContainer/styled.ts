import { P12 } from 'commonStyled'
import { styled } from 'styled-components'

export const StatsPieChartContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: end;
`
export const TStatsPieChartContainer = styled.div`
  //* PieChartWrapper Wrap
  display: flex;
  flex-wrap: nowrap;
  row-gap: 10px;
`
export const MStatsPieChartContainer = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: start;
  row-gap: 20px;
`
export const PieChartWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  @media screen and (${(props) => props.theme.tablet}) {
  }
`
export const PiechartTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 15px;
`
