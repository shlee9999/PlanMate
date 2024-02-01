import { H14_500, P14 } from 'commonStyled'
import styled from 'styled-components'

export const RestTimer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  ${H14_500}
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
  bottom: 20px;
  left: 32px;
`
export const YellowTypo = styled.span`
  ${P14}
  text-align: center;
  color: ${(props) => props.theme.yellow};
  word-wrap: break-word;
`
