import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import greenCheckImg from 'assets/images/check_green.png'
import whiteCheckImg from 'assets/images/check_white.png'

export const Root = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  position: relative;
  margin-top: ${HEADER_HEIGHT}px;
`

export const TagRoot = styled.span`
  &::before {
    content: '#';
  }
`

export const CheckImg = styled.img`
  content: url(${greenCheckImg});
  width: 9px;
  height: 7px;
  margin-right: 3px;
`

export const RegisterButton = styled.button`
  width: 96px;
  height: 32px;
  top: 801px;
  left: 1184px;
  border-radius: 100px;
  border: 1px solid #01cb45;
  color: #01cb45;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${CheckImg} {
      content: url(${whiteCheckImg});
    }
    color: white;
    background-color: #1db951;
  }
`
