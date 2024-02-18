import { H21_700, P14, P16, P18 } from 'commonStyled'
import styled from 'styled-components'
import CustomGoogleSvg from 'assets/images/google_custom.svg'
import { Variants, motion } from 'framer-motion'
import { CloseIcon } from 'assets/SvgComponents'
export const HamburgerModalVar: Variants = {
  initial: {
    right: -260,
  },
  animate: {
    right: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const CloseButton = styled(CloseIcon)`
  fill: ${(props) => props.theme.text.black1};
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`
export const HamburgerModal = styled(motion.div)`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 260px;
  background-color: ${(props) => props.theme.background.white};
  padding: 0 20px;
`
export const UserInfoContainer = styled.div`
  cursor: pointer;
  margin-top: 60px;
`
export const UserName = styled.p`
  ${H21_700}
  &::after {
    ${P16}
    content: '님';
  }
`
export const Email = styled.div`
  position: relative;
  padding-left: 16px;
  ${P14}
  color: ${(props) => props.theme.text.gray1};
  margin-top: 2px;
  &::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    content: '';
    width: 16px;
    height: 16px;
    background-image: url(${CustomGoogleSvg});
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const MainNavContainer = styled.ul`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`
export const MainNavItem = styled.li`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  font-family: 'Pretendard-Regular', sans-serif;
  ${P18}
  color:${(props) => props.theme.text.black1}
`
export const DividingLine = styled.hr`
  margin-top: 64px;
  background-color: ${(props) => props.theme.text.gray3};
`
export const SubNavContainer = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const SubNavItem = styled.li`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  font-family: 'Pretendard-Regular', sans-serif;
  ${P16}
  color: ${(props) => props.theme.text.gray2};
`
