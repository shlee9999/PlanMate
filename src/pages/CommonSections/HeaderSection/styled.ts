import { HEADER_HEIGHT, HEADER_MAX_WIDTH, HEADER_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'
import { Variants, motion } from 'framer-motion'
import { Logo } from 'assets/Logo'
export const Root = styled.nav`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  width: 100vw;
  box-shadow: 0px 4px 8px 0px #00000014;
  height: ${HEADER_HEIGHT};
  background-color: ${(props) => props.theme.background.white};
  z-index: 10;
`
export const ContentWrapper = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  min-width: ${HEADER_MIN_WIDTH}px;
  display: flex;
  justify-content: space-between;
  padding: 17px 160px 16px 160px;
  margin: 0 auto;
  box-sizing: border-box;
`
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`

export const RightContainer = styled.div`
  display: flex;
  column-gap: 18px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.5px;
`
export const GreetTypo = styled.p`
  cursor: pointer;
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
  display: flex;
  column-gap: 16px;
  cursor: pointer;
`

type PageItemProps = {
  $isSelected: boolean
}

export const NavItem = styled(motion.li)<PageItemProps>`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;
  color: ${(props) => (props.$isSelected ? props.theme.primary.default : '')};
  transition: color 0.2s;
  &:hover {
    color: ${(props) => props.theme.primary.default};
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
  width: 104px;
  height: 31px;
  margin-right: 56px;
`
