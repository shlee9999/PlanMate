import styled from 'styled-components'
import modalExitButton from 'assets/images/modal_exit_button.png'

const FOOTER_HEIGHT = 40

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2222224d;
  z-index: 5;
`

export const FooterButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: ${FOOTER_HEIGHT}px;
  height: ${FOOTER_HEIGHT}px;
  text-align: center;
  width: 50%;
`

export const WhiteButton = styled(FooterButton)`
  color: #666666;
  border-top: 1px solid #dddede;
`
export const GreenButton = styled(FooterButton)`
  color: #ffffff;
  background-color: #01cb45;
  border-top: 1px solid #1db951;
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
