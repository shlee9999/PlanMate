import { styled } from 'styled-components'

export const Root = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin: 5px 4px;
  border: none;

  &.isSelected,
  &:hover {
    width: 24px;
    height: 24px;
    margin: 2px;
    box-shadow: 0px 2px 4px 0px #00000033;
  }
`
