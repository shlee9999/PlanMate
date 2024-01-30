import styled from 'styled-components'
import { RightArrow } from 'assets/SvgComponents'
import { LARGE_SIZE } from 'constants/layout'
import { P12, P14 } from 'commonStyled'
import { BLOCK_SELECT } from 'constants/blockSelect'

export const Root = styled.div`
  ${BLOCK_SELECT}
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 800px;
`
export const Table = styled.table`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  tbody {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
`
export const TableBody = styled.tbody``
const Cell = styled.td`
  ${P12}
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
  color: ${(props) => props.theme.text.gray1};
  @media screen and (${(props) => props.theme.medium}) {
    &:first-child {
      display: none;
    }
    &:nth-child(2) {
      border-left: 1px solid ${(props) => props.theme.border.default};
      margin-left: 30px;
    }
  }
`
export const DayCellRow = styled.tr`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${P12}
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
  $isSelected?: boolean
  $hour?: string
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
      line-height: 0;
    }
  }
  @media (${(props) => props.theme.medium}) {
    &:nth-child(2) {
      position: relative;
      &::before {
        content: '${(props) => props.$hour}';
        position: absolute;
        right: calc(100% + 10px);
        ${P14}
        top: -8px;
      }
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
  @media (max-width: ${LARGE_SIZE}px) {
    top: -40px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  ${P14}

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
