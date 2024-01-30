import { ModalWrapper } from 'commonStyled'
import styled from 'styled-components'

// export const Root = styled.div`
//   background-color: ${(props) => props.theme.background.white};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: 70%;
//   border-radius: 10px;
//   height: 80%;
//   column-gap: 8px;
// `
export const ColorPicker = styled.div``
const COLOR_BUTTON_GAP = 8
export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${COLOR_BUTTON_GAP}px;
  &:not(:first-child) {
    margin-top: ${COLOR_BUTTON_GAP}px;
  }
`

export const ColorPickerModalWrapper = styled(ModalWrapper)`
  opacity: 0;
  z-index: 100;
`
export const ColorButton = styled.button`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border: none;

  &.isSelected,
  &:hover {
    scale: 1.2;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 1.1;
  }
`
