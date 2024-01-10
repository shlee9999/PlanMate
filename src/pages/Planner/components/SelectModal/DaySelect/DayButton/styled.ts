import { styled } from 'styled-components'

export const Root = styled.button`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.gray2};
  cursor: pointer;
`
