import { styled } from 'styled-components'

export const Root = styled.div`
  width: 320px;
  height: 266px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
  overflow: hidden;
`

export const InputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 5px;
`
export const NameInput = styled.input`
  width: 198px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
  box-sizing: border-box;
  padding: 12px 8px 10px;
`
export const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 36px;
  transform: translate(-50%);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
`

export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: ${(props) => props.theme.text.gray1};
`

export const LowerWrapper = styled.div`
  display: flex;
  column-gap: 5px;
`

export const LowerTypo = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.gray1};
`