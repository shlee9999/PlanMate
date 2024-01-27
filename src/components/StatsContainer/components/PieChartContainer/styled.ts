import { P10, P12 } from 'commonStyled'
import { Cell } from 'recharts'
import { styled } from 'styled-components'

export const StatsPieChartContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 0;
`

export const PieChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`
export const PiechartTitle = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 15px;
`
export const LegendText = styled.span`
  ${P10}
`
