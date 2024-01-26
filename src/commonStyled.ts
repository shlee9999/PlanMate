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
import { StyledLogo } from 'components/Header/styled'

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

//* 폰트 사이즈 설정 - font-size, font-weight 순서로 정렬.
//* Heading은 font-size 500 이상
/** 46px 700*/
export const H0 = styled.h1`
  font-size: 46px;
  font-weight: 700;
  line-height: 58px;
`
/** 36px 700*/
export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 45px;
`
/** 36px 500*/
export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
`
/** 21px 700*/
export const H3 = styled.h3`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
/** 21px 500*/
export const H4 = styled.h3`
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
`
/** 16px 700*/
export const H5 = styled.h4`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`
/** 16px 500*/
export const H6 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`
/** 14px 700*/
export const H7 = styled.h5`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`
/** 14px 500*/
export const H8 = styled.h6`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`
/**12px 500 */
export const H9 = styled.h6`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`

//* Paragraph는 font-weight 400 이하
/** 14px*/
export const P2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`
/** 12px*/
export const P3 = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`
/** 10px*/
export const P4 = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`
/** 8px*/
export const P5 = styled.p`
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
`
