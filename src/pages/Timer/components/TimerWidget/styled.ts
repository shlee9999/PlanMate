import { H36_500, H46_700 } from 'commonStyled'
import { styled } from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 74px;
  height: 58px;
  line-height: 58px;
`

export const Mode = styled.p`
  ${H46_700}
`
export const Timer = styled.p`
  ${H36_500}
  color: ${(props) => props.theme.primary.default};
`
