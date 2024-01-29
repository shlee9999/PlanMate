import { styled } from 'styled-components'
import modalExitButton from 'assets/images/close.svg'
import { H14_500, H16_500, H21_500 } from 'commonStyled'

export const Root = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.background.white};
  border-radius: 10px;
`
export const Form = styled.form`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 70px 20px 80px 20px;
`
export const Title = styled.h1`
  text-align: center;
  ${H21_500}
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
  ${H16_500}
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  ${H16_500}
  position: absolute;
  left: 50%;
  top: 36px;
  transform: translate(-50%);
  color: ${(props) => props.theme.text.black2};
`

export const ButtonTypoWrapper = styled.div`
  ${H14_500}
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  color: ${(props) => props.theme.text.gray1};
  &:last-child {
    position: relative;
    left: 7px;
  }
`
export const ColorSelectWrapper = styled.div`
  ${H14_500}
  display: flex;
  column-gap: 8px;
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
