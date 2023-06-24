import React from 'react'
import { Root } from './styles'

const ColorButton = ({
  color,
  closeModal,
  assignSubjectColor,
}: {
  color: string
  closeModal: () => void
  // eslint-disable-next-line
  assignSubjectColor: (color: string) => void
}) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectColor(color)
    closeModal()
  }
  return <Root color={color} onClick={onClickButton}></Root>
}
export default ColorButton
