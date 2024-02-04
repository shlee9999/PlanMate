import { P12 } from 'commonStyled'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const TooltipRoot = styled(motion.div)`
  ${P12}
  position: absolute;
  background-color: rgb(255, 249, 219);
  border: 1px solid rgba(205, 133, 63, 0.3);
  color: rgba(205, 133, 63, 0.7);
  border-radius: 8px;
  width: 150px;
  padding: 15px 10px;
  &::after {
    position: absolute;
    content: '';
    background-color: rgb(255, 249, 219);
    width: 10px;
    height: 10px;
    bottom: -6px;
    left: 10px;
    transform: rotate(45deg);
    border-bottom: 1px solid rgba(205, 133, 63, 0.3);
    border-right: 1px solid rgba(205, 133, 63, 0.3);
    border-top: 0;
    border-left: 0;
  }
`
