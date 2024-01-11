import styled from 'styled-components'

export const Root = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary.default};
  color: ${(props) => props.theme.primary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.background.white};
    background-color: ${(props) => props.theme.primary.dark};
  }
`
