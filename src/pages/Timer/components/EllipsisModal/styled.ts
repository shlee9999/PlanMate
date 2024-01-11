import styled from 'styled-components'

const BUTTON_HEIGHT = 40

export const Root = styled.div`
  width: 320px;
  height: 240px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
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
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.text.gray1};
  border-top: 1px solid ${(props) => props.theme.border.default};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`