import { styled } from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 74px;
  height: 58px;
  line-height: 58px;
`

export const Mode = styled.p`
  font-size: 46px;
  font-weight: 700;
`
export const Timer = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: ${(props) => props.theme.primary.default};
`
