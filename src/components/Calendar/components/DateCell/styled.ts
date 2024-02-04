import styled from 'styled-components'
import { Tooltip } from '..'
import { Cell } from 'components/Calendar/styled'
import { DESKTOP_DATE_CELL_SIZE, TABLET_DATE_CELL_SIZE, MOBILE_DATE_CELL_SIZE } from 'constants/dateCellSize'

const bgColor = ['transparent', 'rgba(1, 203, 69, 0.1)', 'rgba(1, 203, 69, 0.6)', 'rgba(1, 203, 69, 1)']
const textColor = ['black', 'black', 'white', 'white']

type DateCellProps = {
  $isSelected: boolean
  $index?: number
}

export const DateCell = styled(Cell)<DateCellProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: ${DESKTOP_DATE_CELL_SIZE}px;
    height: ${DESKTOP_DATE_CELL_SIZE}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: ${TABLET_DATE_CELL_SIZE}px;
    height: ${TABLET_DATE_CELL_SIZE}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${MOBILE_DATE_CELL_SIZE}px;
    height: ${MOBILE_DATE_CELL_SIZE}px;
  }
  &.current {
    background-color: ${(props) => bgColor[props.$index]};
    color: ${(props) => (props.$isSelected ? props.theme.text.white : textColor[props.$index])};
    scale: ${(props) => (props.$isSelected ? 1.2 : 1)};
    &:hover {
      scale: 1.2;
    }
    /* border: 1px solid ${(props) => (props.$isSelected ? props.theme.primary.dark : 'none')}; */
    transition: scale 0.1s ease-out;
    border-radius: 100%;
    background-color: ${(props) => (props.$isSelected ? props.theme.primary.default : '')};

    opacity: ${(props) => bgColor[props.$index]};
  }

  &.prev {
    color: ${(props) => props.theme.background.gray1};
  }

  &.next {
    opacity: 0;
    pointer-events: none;
  }
  &.today {
    border-radius: 50%;
    background-color: #0088fe;
    color: ${(props) => props.theme.text.white};
    scale: 1.3;
    &:hover {
      scale: 1.3;
    }
  }
`
export const StyledTooltip = styled(Tooltip)`
  top: -10px;
  left: 0;
`
export const DateCellWrapper = styled.div`
  position: relative;
`
