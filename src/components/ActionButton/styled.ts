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
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  box-shadow: 0px 4px 6px 0px #0000001f;
`
export const CloseButton = styled(Root)`
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.black2};
`
