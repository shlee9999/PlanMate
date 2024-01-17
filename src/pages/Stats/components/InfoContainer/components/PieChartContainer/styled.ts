import { styled } from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: end;
`
export const Wrapper = styled.div`
  flex-grow: 1;
`
export const PiechartTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: ${(props) => props.theme.text.gray1};
  margin-bottom: 15px;
`
