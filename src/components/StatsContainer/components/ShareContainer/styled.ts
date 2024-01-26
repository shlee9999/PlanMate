import { P8 } from 'commonStyled'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled(motion.div)`
  position: absolute;
  right: 10px;
  top: 10px;
`
export const ShareButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
  font-size: 12px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 10px;
`

export const SNSItems = styled(motion.ul)`
  ${P8}
  background-color: ${(props) => props.theme.background.white};
  position: absolute;
  bottom: -55px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 53px;
  border-radius: 8px;
  border: 1px solid #dddede;
  transform-origin: left top;
`

export const SNSItem = styled(motion.li)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SNSLabel = styled.p`
  ${P8}
  text-align: center;
  color: ${(props) => props.theme.text.gray2};
  margin-top: 3px;
`
