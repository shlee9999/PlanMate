import styled from 'styled-components'

export const Root = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70%;
  border-radius: 10px;
  height: 80%;
  column-gap: 8px;
`
export const ColorButtonWrapper = styled.div``
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
