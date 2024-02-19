import InstagramSvg from 'assets/images/instagram.svg'
import MessageSvg from 'assets/images/message.svg'
import { FlexRow, H12_500, P11 } from 'commonStyled'
import { ALLOW_SELECT } from 'constants/blockSelect'
import {
  FOOTER_HEIGHT,
  BODY_MAX_WIDTH,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  XLARGE_SIDE_MARGIN,
  BODY_MIN_WIDTH,
  SMALL_SIDE_MARGIN,
} from 'constants/layout'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  ${ALLOW_SELECT}
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 32px ${XLARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 32px ${LARGE_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 32px ${MEDIUM_SIDE_MARGIN}px 42px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 32px ${SMALL_SIDE_MARGIN}px 42px;
  }
  background-color: ${(props) => props.theme.background.gray2};
  width: 100vw;
  height: ${FOOTER_HEIGHT}px;
  * {
    font-family: 'Pretendard-Regular', sans-serif;
  }
  p {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const Footer = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const RightContainer = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text.gray2};
`
export const NavigateTypo = styled.p`
  ${H12_500}

  margin-right: 16px;
  &:last-child {
    margin-right: 8px;
  }
`

export const EmailAddress = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  position: relative;
  margin-left: 15px;
  &::before {
    pointer-events: none;
    top: 1px;
    right: calc(100% + 2px);
    position: absolute;
    content: url(${MessageSvg});
    vertical-align: middle;
  }
  ${P11}
  margin-right: 8px;
  gap: 2px;
`

export const InstagramAddress = styled.p`
  margin-left: 15px;
  position: relative;
  ${P11}
  &::before {
    content: '';
    width: 13px;
    height: 13px;
    pointer-events: none;
    top: 1px;
    right: calc(100% + 2px);
    background-image: url(${InstagramSvg});
    background-size: contain;
    position: absolute;
    vertical-align: middle;
  }
`
