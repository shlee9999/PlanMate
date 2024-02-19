import {
  BODY_MAX_WIDTH,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  XLARGE_SIDE_MARGIN,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  SMALL_SIDE_MARGIN,
  BODY_MIN_WIDTH,
  MEDIUM_HEADER_HEIGHT,
  SMALL_HEADER_HEIGHT,
} from 'constants/layout'
import styled, { css } from 'styled-components'
import { CloseIcon, EllipsisIcon, RightArrow } from 'assets/SvgComponents'
import { Variants, motion } from 'framer-motion'
import { BLOCK_SELECT } from 'constants/blockSelect'
import { Spinner } from 'components'

//* 폰트 사이즈 설정 - font-size, font-weight 순서로 정렬.
//* Heading은 font-size 500 이상
/** 46px 700*/
export const H46_700 = css`
  font-size: 46px;
  font-weight: 700;
  line-height: 58px;
`
/** 36px 700*/
export const H36_700 = css`
  font-size: 36px;
  font-weight: 700;
  line-height: 45px;
`
/** 36px 500*/
export const H36_500 = css`
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
`
/** 32px 700*/
export const H32_700 = css`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
`
/** 32px 500*/
export const H32_500 = css`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
`
/** 32px 700*/
export const H28_700 = css`
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
`
/** 32px 500*/
export const H28_500 = css`
  font-size: 28px;
  font-weight: 500;
  line-height: 35px;
`

/** 24px 700*/
export const H24_700 = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`
/** 24px 500*/
export const H24_500 = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
`

/** 21px 700*/
export const H21_700 = css`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
/** 21px 500*/
export const H21_500 = css`
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
`
/** 16px 700*/
export const H16_700 = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`
/** 16px 500*/
export const H16_500 = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`
/** 14px 700*/
export const H14_700 = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`
/** 14px 500*/
export const H14_500 = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`
/**12px 700 */
export const H12_700 = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
`
/**12px 500 */
export const H12_500 = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`

//* Paragraph는 font-weight 400 이하
/** 18*/
export const P18 = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 21.5px;
`
/** 16px*/
export const P16 = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`
/** 14px*/
export const P14 = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`
/** 12px*/
export const P12 = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`
/** 11px*/
export const P11 = css`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`
/** 10px*/
export const P10 = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`
/** 8px*/
export const P8 = css`
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
`
export const PageRoot = styled.div`
  //* DEFAULT
  position: relative;
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  margin-top: ${HEADER_HEIGHT}px;
  overflow-x: hidden;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  ${BLOCK_SELECT}

  @media screen and (${(props) => props.theme.xlarge}) {
    //* XLARGE
    padding: 40px ${XLARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    //* LARGE
    padding: 30px ${LARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    //* MEDIUM
    padding: 20px ${MEDIUM_SIDE_MARGIN}px;
    margin-top: ${MEDIUM_HEADER_HEIGHT}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    //* SMALL
    padding: 10px ${SMALL_SIDE_MARGIN}px;
    margin-top: ${SMALL_HEADER_HEIGHT}px;
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

export const ModalExitButton = styled(CloseIcon)`
  position: absolute;
  top: 16px;
  right: 24px;
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.text.gray2};
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

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const WhiteButton = styled(FooterButton)`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  ${H16_500}
  color: ${(props) => props.theme.text.gray1};
  border-top: 1px solid ${(props) => props.theme.border.default};
`
export const GreenButton = styled(FooterButton)`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  ${H16_500}
  color: ${(props) => props.theme.text.white};
  background-color: ${(props) => props.theme.primary.default};
  border-top: 1px solid ${(props) => props.theme.primary.dark};
  order: 1;
`
export const VerticalEllipsis = styled(EllipsisIcon)`
  transform: rotate(90deg);
  width: 20px;
`
