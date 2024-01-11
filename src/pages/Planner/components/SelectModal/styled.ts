import { styled } from 'styled-components'
import modalExitButton from 'assets/images/close.svg'

export const Root = styled.div`
  width: 320px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 70px 20px 80px 20px;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme.text.black2};
  margin-bottom: 20px;
`
export const ModalExitButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  border: none;
  width: 20px;
  height: 20px;
  /* 차후 수정 */
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
  height: 300px;
`
export const Input = styled.input`
  width: 208px;
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

export const ButtonTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: ${(props) => props.theme.text.gray1};
  &:last-child {
    position: relative;
    left: 7px;
  }
`
export const ColorSelectWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text.gray1};
`
export const ColorSelectTypo = styled.p`
  position: relative;
  top: 5px;
  right: 5px;
`

export const TimeSelectWrapper = styled.div`
  padding-right: 8px;
  display: flex;
  justify-content: start;
  gap: 20px;
`
