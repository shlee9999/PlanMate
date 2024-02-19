import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

export const CopyAlertModalVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
export const CopyAlertModal = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  bottom: 100%;
  width: max-content;
  padding: 0 10px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text.gray3};
  border: 1px solid ${(props) => props.theme.text.white};
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
`
