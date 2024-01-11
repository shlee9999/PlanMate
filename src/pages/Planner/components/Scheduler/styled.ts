import styled from 'styled-components'
import { RightArrow } from 'assets/SvgComponents'
export const Root = styled.table`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
const Cell = styled.td`
  &:first-child {
    border-bottom: none;
  }
  &:last-child {
    border-right: none;
  }
  border-right: 1px solid ${(props) => props.theme.border.default};
  border-bottom: 1px solid ${(props) => props.theme.border.default};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.text.gray1};
`
export const DayCellRow = styled.tr`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.text.gray1};
`
interface DayCellProps {
  $today: boolean
}
export const DayCell = styled(Cell)<DayCellProps>`
  color: ${(props) => (props.$today ? `${props.theme.primary.default}` : '')};
`
export const DayTypo = styled.p``
export const DateTypo = styled.p``
interface DataCellProps {
  $isSelected: boolean
}
export const DataCell = styled(Cell)<DataCellProps>`
  position: relative;
  background-color: ${(props) => (props.$isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
  &:not(:first-child):hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    p {
      position: relative;
      top: -50%;
      left: 10%;
    }
    &::after {
      position: absolute;
      content: '';
      width: 24px;
      height: 1px;
      background-color: ${(props) => props.theme.border.default};
      top: -1px;
      right: 0;
    }
  }
`
export const DataCellRow = styled.tr`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:last-of-type {
    ${DataCell} {
      border-bottom: 0;
    }
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-size: 15px;
  color: ${(props) => props.theme.text.gray1};
`

export const PrevButton = styled(RightArrow)`
  fill: ${(props) => props.theme.text.gray1};
  transform: rotate(180deg);
  cursor: pointer;
`
export const NextButton = styled(RightArrow)`
  fill: ${(props) => props.theme.text.gray1};
  cursor: pointer;
`
