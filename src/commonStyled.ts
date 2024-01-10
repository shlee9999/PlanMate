import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import greenCheckImg from 'assets/images/check_green.png'
import whiteCheckImg from 'assets/images/check_white.png'

export const PageRoot = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  margin-top: ${HEADER_HEIGHT}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
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
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary.default};
  color: ${(props) => props.theme.primary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${CheckImg} {
      content: url(${whiteCheckImg});
    }
    color: ${(props) => props.theme.background.white};
    background-color: ${(props) => props.theme.primary.dark};
  }
`
