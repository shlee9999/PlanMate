import { GreenButton, H21_700, P14 } from 'commonStyled'
import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 240px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background.white};
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`

export const LongGreenButton = styled(GreenButton)`
  width: 100%;
`

export const UpperTypo = styled.p`
  ${H21_700}
  margin-bottom: 4px;
`
export const LowerTypo = styled.p`
  ${P14}
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`
