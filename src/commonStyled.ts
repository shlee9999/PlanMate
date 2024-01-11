import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import modalExitButton from 'assets/images/close.svg'
import { RightArrow } from 'assets/SvgComponents'
import { Variants, motion } from 'framer-motion'

export const PageRoot = styled.div`
  position: relative;
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
