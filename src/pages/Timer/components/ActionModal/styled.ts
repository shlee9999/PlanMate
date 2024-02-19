import { H14_500, H16_500 } from 'commonStyled'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const ActionModal = styled(motion.div)`
  width: 320px;
  height: 266px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc((100vh - 266px) / 2);
  padding: 60px 15px 0 15px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.white};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NameInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 12px 8px 10px;
`
export const ModalTitle = styled.div`
  ${H16_500}
  position: absolute;
  top: 25px;
  color: ${(props) => props.theme.text.black2};
`

export const NameInputContainer = styled.div`
  width: 100%;
  ${H14_500}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: ${(props) => props.theme.text.gray1};
  white-space: nowrap;
  margin-bottom: 15px;
  padding-left: 5px;
`

export const LowerWrapper = styled.div`
  display: flex;
  column-gap: 15px;
`

export const LowerTypo = styled.p`
  ${H14_500}
  margin-top: 3px;
  color: ${(props) => props.theme.text.gray1};
`
