import {
  HEADER_HEIGHT,
  BODY_MAX_WIDTH,
  HEADER_Z_INDEX,
  LARGE_SIDE_MARGIN,
  MEDIUM_SIDE_MARGIN,
  SMALL_HEADER_HEIGHT,
  SMALL_SIDE_MARGIN,
  XLARGE_SIDE_MARGIN,
  BODY_MIN_WIDTH,
  MEDIUM_HEADER_HEIGHT,
} from 'constants/layout'
import styled from 'styled-components'
import { Variants, motion } from 'framer-motion'
import { Logo } from 'assets/Logo'
import { BLOCK_SELECT } from 'constants/blockSelect'
import { H14_500, P14 } from 'commonStyled'
import { HamburgerIcon } from 'assets/SvgComponents'

const LOGO_WIDTH = 104
const MEDIUM_LOGO_WIDTH = 95
const SMALL_LOGO_WIDTH = 85
const XLARGE_LOGO_MARGIN_RIGHT = 56
const LARGE_LOGO_MARGIN_RIGHT = 50
export const HeaderWrapper = styled.nav`
  ${BLOCK_SELECT}
  position: fixed;
  left: 50%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100vw;
  box-shadow: 0px 4px 8px 0px #00000014;
  height: ${HEADER_HEIGHT}px;
  background-color: ${(props) => props.theme.background.white};
  z-index: ${HEADER_Z_INDEX};
  @media screen and (${(props) => props.theme.medium}) {
    height: ${MEDIUM_HEADER_HEIGHT}px;
  }
  @media screen and (${(props) => props.theme.small}) {
    height: ${SMALL_HEADER_HEIGHT}px;
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
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  position: relative;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.xlarge}) {
    padding: 17px ${XLARGE_SIDE_MARGIN}px 16px ${XLARGE_SIDE_MARGIN + LOGO_WIDTH + XLARGE_LOGO_MARGIN_RIGHT}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    padding: 17px ${LARGE_SIDE_MARGIN}px 16px ${LARGE_SIDE_MARGIN + LOGO_WIDTH + LARGE_LOGO_MARGIN_RIGHT}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    padding: 17px ${MEDIUM_SIDE_MARGIN}px 16px ${MEDIUM_SIDE_MARGIN}px;
    justify-content: end;
    ${NavItemContainer} {
      display: none;
    }
  }
  @media screen and (${(props) => props.theme.small}) {
    height: ${SMALL_HEADER_HEIGHT}px;
    padding: 0 10px;
  }
`

export const RightContainer = styled.div`
  ${H14_500}
  display: flex;
  column-gap: 18px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (${(props) => props.theme.small}) {
    column-gap: 10px;
    margin-right: 5px;
  }
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
  z-index: 1000;
`

export const StyledLogo = styled(Logo)`
  position: absolute;
  width: ${LOGO_WIDTH}px;
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
    top: 13px;
  }
  @media screen and (${(props) => props.theme.small}) {
    width: ${SMALL_LOGO_WIDTH}px;
    left: ${SMALL_SIDE_MARGIN + 5}px;
    top: 9px;
  }
`
export const StyledHamburgerIcon = styled(HamburgerIcon)`
  display: none;
  @media screen and (${(props) => props.theme.medium}) {
    display: unset;
  }
  position: relative;
`
