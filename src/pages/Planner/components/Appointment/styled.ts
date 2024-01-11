import { CloseIcon } from 'assets/SvgComponents'
import styled from 'styled-components'

interface RootProps {
  $bgColor: string
  $height: number
}

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  opacity: 0;
  top: 5px;
  right: 5px;
  width: 15px;
  cursor: pointer;
  fill: ${(props) => props.theme.text.gray1};
`

export const Root = styled.div<RootProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$height * 102.5}%;
  box-sizing: border-box;
  text-transform: uppercase;
  color: ${(props) => props.theme.background.white};
  text-align: center;
  font-weight: 600;
  opacity: 0.5;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  &:hover {
    opacity: 0.6;
    ${CloseButton} {
      opacity: 1;
    }
  }
  &:active {
    opacity: 0.7;
  }
  z-index: 2;
  padding-top: 10px;
`

export const Title = styled.p``
