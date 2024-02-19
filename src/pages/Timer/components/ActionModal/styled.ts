import { H14_500, H16_500 } from 'commonStyled'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Form = styled(motion.form)`
  width: 320px;
  height: 266px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc((100vh - 266px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 0 0;
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
  overflow: hidden;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
`
export const NameInput = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 12px 8px 10px;
`
export const ModalTitle = styled.div`
  ${H16_500}
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translate(-50%);
  color: ${(props) => props.theme.text.black2};
`

export const UpperWrapper = styled.div`
  ${H14_500}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: ${(props) => props.theme.text.gray1};
  white-space: nowrap;
`

export const LowerWrapper = styled.div`
  display: flex;
  column-gap: 15px;
`

export const LowerTypo = styled.p`
  ${H14_500}
  margin-top: 8px;
  color: ${(props) => props.theme.text.gray1};
`
