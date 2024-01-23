import { CloseIcon, TrashIcon } from 'assets/SvgComponents'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { changeColorOpacity } from 'utils/helper'

interface RootProps {
  $bgColor: string
  $height: string
}
export const Wrapper = styled(motion.div)<RootProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.background.white};
  width: 100%;
  height: ${(props) => props.$height};
  z-index: 1;
  overflow: hidden;
  border-radius: 7px;
`
export const CloseButton = styled(CloseIcon)`
  position: absolute;
  opacity: 0;
  top: 7px;
  right: 5px;
  width: 15px;
  cursor: pointer;
`

export const Root = styled.div<{ $bgColor: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  color: ${(props) => props.$bgColor};
  text-align: center;
  font-weight: 600;
  background-color: ${(props) => changeColorOpacity(props.$bgColor, 0.2)};

  border-radius: 5px;
  &:hover {
    opacity: 0.8;
    ${CloseButton} {
      opacity: 1;
    }
  }
  &:active {
    opacity: 0.7;
  }
  z-index: 2;
  padding-top: 10px;
  transform-origin: center top;
`
export const LeftBar = styled.div<{ $bgColor: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: ${(props) => props.$bgColor};
`
export const Title = styled.p``
