import React from 'react'
import { Root } from './styled'

const ColorButton = ({
  color,
  closeModal,
  assignSubjectColor,
}: {
  color: string
  closeModal?: () => void
  assignSubjectColor: (color: string) => void
}) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectColor(color)
    if (closeModal) closeModal()
  }
  return <Root color={color} onClick={onClickButton}></Root>
}
export default ColorButton
