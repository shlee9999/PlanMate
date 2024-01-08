import React from 'react'
import { Root } from './styled'

const ColorButton = ({
  color,
  closeModal,
  assignSubjectColor,
  isSelected,
  setSelectedColor,
  onClick,
}: {
  color: string
  closeModal?: () => void
  assignSubjectColor: (color: string) => void
  isSelected: boolean
  setSelectedColor: () => void
  onClick?: (e: React.MouseEvent) => void
}) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectColor(color)
    setSelectedColor()
    if (closeModal) closeModal()
  }
  return <Root color={color} onClick={onClick || onClickButton} className={isSelected ? 'isSelected' : ''} />
}
export default ColorButton
