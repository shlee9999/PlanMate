import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
export const StyledSpinner = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.border.dark};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border-top-color: ${(props) => props.theme.primary.default};
  opacity: 0.7;
`
export const LoadingTypo = styled.p`
  color: ${(props) => props.theme.text.gray2};
`
