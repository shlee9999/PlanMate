import styled from 'styled-components'
import { Cell } from '../styled'

type DateCellProps = {
  $isSelected: boolean
  $index?: number
}
const bgColor = ['transparent', 'rgba(1, 203, 69, 0.1)', 'rgba(1, 203, 69, 0.6)', 'rgba(1, 203, 69, 1)']
const textColor = ['black', 'black', 'white', 'white']
export const Root = styled(Cell)<DateCellProps>`
  cursor: pointer;
  width: 33px;
  height: 33px;

  &.current {
    background-color: ${(props) => bgColor[props.$index]};
    color: ${(props) => textColor[props.$index]};
    scale: ${(props) => (props.$isSelected ? 1.2 : 1)};
    &:hover {
      scale: 1.2;
    }
    /* border: 1px solid ${(props) => (props.$isSelected ? props.theme.primary.dark : 'none')}; */
    transition: scale 0.1s ease-out;
    border-radius: 100%;
    background-color: ${(props) => (props.$isSelected ? props.theme.primary.dark : '')};

    opacity: ${(props) => bgColor[props.$index]};
    color: ${(props) => textColor[props.$index]};
  }

  &.prev {
    color: ${(props) => props.theme.background.gray1};
  }

  &.next {
    opacity: 0;
    pointer-events: none;
  }
`
