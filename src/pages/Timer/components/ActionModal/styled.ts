import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Root = styled(motion.div)`
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
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
  box-sizing: border-box;
  padding: 12px 8px 10px;
`
export const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translate(-50%);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
`

export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: ${(props) => props.theme.text.gray1};
`

export const LowerWrapper = styled.div`
  display: flex;
  column-gap: 15px;
`

export const LowerTypo = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.gray1};
`
