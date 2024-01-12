import { styled } from 'styled-components'

export const Root = styled.button`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border: none;

  &.isSelected,
  &:hover {
    scale: 1.2;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 1.1;
  }
`
