import { FlexRow, H16_500, P12 } from 'commonStyled'
import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

export const InfoBox = styled(motion.div)`
  &:hover {
    border: 1px solid ${(props) => props.theme.text.gray3};
  }
  position: relative;
  background-color: ${(props) => props.theme.background.white};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
`
export const Header = styled(FlexRow)`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
`
export const BoxTitle = styled.p`
  ${H16_500}
  color: ${(props) => props.theme.text.black2};
`
export const BoxDescription = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
`

export const InfoBoxVar: Variants = {
  initial_left: {
    opacity: 0,
    right: 20,
  },
  initial_right: {
    opacity: 0,
    right: -25,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    right: 0,
    transition: {
      duration: 0.7,
      type: 'tween',
    },
  },
}
