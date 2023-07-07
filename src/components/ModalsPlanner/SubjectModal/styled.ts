import { styled } from 'styled-components'
import modalExitButton from 'assets/images/modal_exit_button.png'
import exp from 'constants'

export const Root = styled.div`
  width: 320px;
  height: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`

export const ModalExitButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  border: none;
  width: 20px;
  height: 20px;
  background: url(${modalExitButton}) no-repeat 0 0;
  background-size: 20px 20px;
`

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`
export const NameInput = styled.input`
  width: 208px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dddede;
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
  color: #444444;
`

export const ColorPickerButton = styled.button`
  text-align: left;
  background-color: ${(props) => props.color};
  color: white;
  width: 208px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dddede;
  color: #dddede;
  outline: none;
  width: 208px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dddede;
  box-sizing: border-box;
  padding: 12px 8px 10px;
`

export const ButtonTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: #666666;
`

export const SelectTimeWrapper = styled.div``
