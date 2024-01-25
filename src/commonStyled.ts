import {
  BODY_MAX_WIDTH,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  DESKTOP_SIDE_MARGIN,
  TABLET_SIDE_MARGIN,
  MOBILE_SIDE_MARGIN,
} from 'constants/layout'
import styled from 'styled-components'
import modalExitButton from 'assets/images/close.svg'
import { RightArrow } from 'assets/SvgComponents'
import { Variants, motion } from 'framer-motion'
import { Spinner } from 'components'

export const PageRoot = styled.div`
  //* DEFAULT
  position: relative;
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  margin-top: ${HEADER_HEIGHT}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media screen and (${(props) => props.theme.desktop}) {
    //* DESKTOP
    padding: 40px ${DESKTOP_SIDE_MARGIN}px;
    /* background-color: teal; */
  }
  @media screen and (${(props) => props.theme.tablet}) {
    //* TABLET PAGE
    padding: 40px ${TABLET_SIDE_MARGIN}px;
    /* background-color: tomato; */
  }
  @media screen and (${(props) => props.theme.mobile}) {
    //* MOBILE PAGE
    padding: 40px ${MOBILE_SIDE_MARGIN}px;
    /* background-color: yellow; */
  }
`

export const TagRoot = styled.span`
  &::before {
    content: '#';
  }
`

const MODAL_FOOTER_HEIGHT = 40

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: #2222224d;
`
export const ModalWrapperVar: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
  exit: { opacity: 0 },
}

export const FooterButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: ${MODAL_FOOTER_HEIGHT}px;
  height: ${MODAL_FOOTER_HEIGHT}px;
  text-align: center;
  width: 50%;
`

export const WhiteButton = styled(FooterButton)`
  color: ${(props) => props.theme.text.gray1};
  border-top: 1px solid ${(props) => props.theme.border.default};
`
export const GreenButton = styled(FooterButton)`
  color: ${(props) => props.theme.text.white};
  background-color: ${(props) => props.theme.primary.default};
  border-top: 1px solid ${(props) => props.theme.primary.dark};
`

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`

export const ModalExitButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  border: none;
  width: 20px;
  height: 20px;
  background: url(${modalExitButton}) no-repeat 0 0;
  background-size: 20px 20px;
`

export const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`
export const DownArrow = styled(RightArrow)`
  transform: rotate(90deg);
`
export const UpArrow = styled(RightArrow)`
  transform: rotate(-90deg);
`

// export const StyledHeartIcon = styled(HeartIcon)`
//   cursor: pointer;
// `
// export const StyledScrapIcon = styled(ScrapIcon)`
//   cursor: pointer;
// `

export const CenterSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const FlexRow = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap || 5}px;
`
