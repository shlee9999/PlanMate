import { H16_500 } from 'commonStyled'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const BUTTON_HEIGHT = 40

export const EllipsisModal = styled(motion.div)`
  width: 320px;
  height: 240px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc((100vh - 240px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
`
export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 56px;
  transform: translate(-50%);
  row-gap: 8px;
  display: flex;
  flex-direction: column;
`
export const CenterButton = styled.button`
  width: 208px;
  height: ${BUTTON_HEIGHT}px;
  line-height: ${BUTTON_HEIGHT}px;
  border-radius: 100px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.border.default};
`

export const UpdateSubjectButton = styled(CenterButton)`
  border: 1px solid ${(props) => props.theme.primary.dark};
  color: ${(props) => props.theme.primary.dark};
  &:hover {
    background-color: ${(props) => props.theme.primary.light};
  }
`
export const DeleteSubjectButton = styled(CenterButton)`
  background-color: ${(props) => props.theme.background.white};
  color: ${(props) => props.theme.warning};
  border: 1px solid ${(props) => props.theme.warning};
  &:hover {
    background-color: ${(props) => props.theme.background.red};
  }
`

export const CloseButton = styled.button`
  ${H16_500}
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.text.gray1};
  border-top: 1px solid ${(props) => props.theme.border.default};
  text-align: center;
`
