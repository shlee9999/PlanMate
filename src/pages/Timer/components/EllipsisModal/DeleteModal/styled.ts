import { H16_500, H21_700, P14 } from 'commonStyled'
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
  ${H16_500}
  margin-top: 36px;
  color: ${(props) => props.theme.text.black2};
`
export const UpperDescriptionTypo = styled.p`
  ${H21_700}
  margin-top: 24px;
  text-align: center;
`
export const LowerDescriptionTypo = styled.p`
  ${P14}
  margin-top: 4px;
  color: ${(props) => props.theme.text.gray1};
`
