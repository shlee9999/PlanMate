import React from 'react'
import { Root } from './styled'

const ColorButton = ({
  color,
  closeModal,
  assignSubjectColor,
  isSelected,
  setSelectedColor,
}: {
  color: string
  closeModal?: () => void
  assignSubjectColor: (color: string) => void
  isSelected: boolean
  setSelectedColor: (color: string) => void
}) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectColor(color)
    setSelectedColor(color)
    if (closeModal) closeModal()
  }
  return <Root color={color} onClick={onClickButton} className={isSelected ? 'isSelected' : ''}></Root>
}
export default ColorButton
