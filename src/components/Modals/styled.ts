import styled from 'styled-components'
const FOOTER_HEIGHT = 40

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const FooterButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: ${FOOTER_HEIGHT}px;
  height: ${FOOTER_HEIGHT}px;
  text-align: center;
  width: 50%;
`

export const ExitButton = styled(FooterButton)`
  color: #666666;
  border-top: 1px solid #dddede;
`
export const ConfirmButton = styled(FooterButton)`
  color: #ffffff;
  background-color: #01cb45;
  border: 1px solid #1db951;
`
