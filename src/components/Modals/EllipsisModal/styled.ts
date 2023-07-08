import styled from 'styled-components'

const BUTTON_HEIGHT = 40

export const Root = styled.div`
  padding: 15px 20px;
  width: 320px;
  height: 240px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
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
  border: 1px solid #dddede;
`

export const UpdateSubjectButton = styled(CenterButton)`
  color: #666666;
  &:hover,
  &:focus {
    color: #01cb45;
    border: 1px solid #01cb45;
    background-color: #e2f9ea;
  }
`
export const DeleteSubjectButton = styled(CenterButton)`
  background-color: white;
  color: #ec6c73;
  &:hover,
  &:focus {
    border: 1px solid #ec6c73;
  }
`
