import styled from 'styled-components'
import { P12, P14 } from 'commonStyled'

export const Calendar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
`

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DayRow = styled(Row)`
  position: relative;
  padding: 0 10px;
  @media screen and (${(props) => props.theme.medium}) {
    padding: 0;
  }
`
export const Cell = styled.div`
  ${P12}
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DayCell = styled(Cell)`
  ${P14}
`
export const Line = styled.hr`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background.gray3};
  width: 100%;
  height: 1px;
`
