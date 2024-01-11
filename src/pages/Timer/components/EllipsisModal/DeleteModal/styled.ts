import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled(motion.div)`
  width: 320px;
  height: 240px;
  position: fixed;
  left: 0;
  right: 0;
  top: calc((100vh - 240px) / 2);

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
  overflow: hidden;
`

export const TitleTypo = styled.p`
  margin-top: 36px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
`
export const UpperDescriptionTypo = styled.p`
  margin-top: 24px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
`
export const LowerDescriptionTypo = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.theme.text.gray1};
`
