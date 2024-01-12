import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled(motion.div)`
  &:hover {
    border: 1px solid ${(props) => props.theme.text.gray3};
  }
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.white};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
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
      duration: 0.9,
      type: 'tween',
    },
  },
}
