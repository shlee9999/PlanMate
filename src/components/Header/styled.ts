import {
  HEADER_HEIGHT,
  HEADER_MAX_WIDTH,
  HEADER_Z_INDEX,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  MOBILE_HEADER_HEIGHT,
  SMALL_SIDE_MARGIN,
  XLARGE_SIDE_MARGIN,
} from 'constants/layout'
import styled from 'styled-components'
import { Variants, motion } from 'framer-motion'
import { Logo } from 'assets/Logo'
import { BLOCK_SELECT } from 'constants/blockSelect'
import { H14_500, P14 } from 'commonStyled'

const LOGO_WIDTH = 104
const MEDIUM_LOGO_WIDTH = 90
const LOGO_MARGIN_RIGHT = 56
const MEDIUM_LOGO_MARGIN_RIGHT = 20
export const HeaderWrapper = styled.nav`
  ${BLOCK_SELECT}
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  width: 100vw;
  box-shadow: 0px 4px 8px 0px #00000014;
  height: ${HEADER_HEIGHT}px;
  background-color: ${(props) => props.theme.background.white};
  z-index: ${HEADER_Z_INDEX};
  @media screen and (${(props) => props.theme.small}) {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`
export const NavItemContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media screen and (${(props) => props.theme.medium}) {
    max-width: 200px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: 100%;
    height: 100%;
    max-width: none;
  }
`

export const Header = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${HEADER_MAX_WIDTH}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 17px ${XLARGE_SIDE_MARGIN}px 16px ${XLARGE_SIDE_MARGIN + LOGO_WIDTH + LOGO_MARGIN_RIGHT}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 17px ${LARGE_SIDE_MARGIN}px 16px ${LARGE_SIDE_MARGIN + LOGO_WIDTH + LOGO_MARGIN_RIGHT}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 17px ${MEDIUM_SIDE_MARGIN}px 16px ${MEDIUM_SIDE_MARGIN + MEDIUM_LOGO_WIDTH + MEDIUM_LOGO_MARGIN_RIGHT}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    justify-content: end;
    height: ${MOBILE_HEADER_HEIGHT}px;
    ${NavItemContainer} {
      display: none;
    }
  }
`

export const RightContainer = styled.div`
  ${H14_500}
  display: flex;
  column-gap: 18px;
  align-items: center;
`
export const GreetTypoContainer = styled.div`
  cursor: pointer;
  @media screen and (${(props) => props.theme.medium}) {
    display: none;
  }
`
export const Username = styled.span`
  position: relative;
  color: ${(props) => props.theme.primary.default};
  text-decoration: underline;
`

export const LogoutTypo = styled.p`
  cursor: pointer;
`
export const Notice = styled.p`
  cursor: pointer;
`

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  column-gap: 16px;
  cursor: pointer;
  @media screen and (${(props) => props.theme.medium}) {
    column-gap: 0;
    justify-content: space-between;
  }
  @media screen and (${(props) => props.theme.small}) {
    height: 100%;
    column-gap: 1px;
  }
`

type PageItemProps = {
  $isSelected: boolean
}

export const NavItem = styled(motion.li)<PageItemProps>`
  ${P14}
  position: relative;
  letter-spacing: 0;
  color: ${(props) => (props.$isSelected ? props.theme.primary.default : '')};
  transition: color 0.2s;
  background-color: ${(props) => props.theme.background.white};
  &:hover {
    color: ${(props) => props.theme.primary.default};
  }
  @media screen and (${(props) => props.theme.small}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`
export const NavItemVar: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -2,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
}
export const YellowCircle = styled(motion.div)`
  position: absolute;
  top: -7px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 100px;
`

export const StyledLogo = styled(Logo)`
  position: absolute;
  width: ${LOGO_WIDTH}px;
  height: 31px;
  margin-right: 56px;
  flex-shrink: 0;
  @media screen and (${(props) => props.theme.xlarge}) {
    left: ${XLARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    left: ${LARGE_SIDE_MARGIN}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${MEDIUM_LOGO_WIDTH}px;
    left: ${MEDIUM_SIDE_MARGIN};
  }
  @media screen and (${(props) => props.theme.small}) {
    left: ${SMALL_SIDE_MARGIN + 20}px;
    top: 6px;
  }
`
export const MobileFooter = styled.div`
  @media screen and (${(props) => props.theme.small}) {
    background-color: ${(props) => props.theme.border.dark};
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 40px;
    padding-top: 1px;
    z-index: ${HEADER_Z_INDEX};
  }
`
