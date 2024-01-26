import { H12_500, P16 } from 'commonStyled'
import styled from 'styled-components'

export const StatsRoot = styled.div`
  height: 100%;
  padding: 22px 24px;
  overflow: visible;
`
export const TimerRoot = styled.div`
  padding: 8px 15px;
`
export const CompareTimer = styled.div`
  ${H12_500}
  color: ${(props) => props.theme.text.black2};
`

export const ChartDividingLine = styled.hr`
  width: 98%;
  height: 2px;
  background-color: ${(props) => props.theme.background.gray1};
  margin: 20px 0;
`
export const Header = styled.p`
  ${P16}
  align-self: flex-start;
  padding-bottom: 10px;
`

export const StudyContainer = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
