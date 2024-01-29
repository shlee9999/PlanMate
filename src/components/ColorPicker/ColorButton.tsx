import React from 'react'
import { ColorButtonRoot } from './styled'

export const ColorButton = ({
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
  setSelectedColor: () => void
}) => {
  const onClickButton = (e: React.MouseEvent) => {
    e.preventDefault() //* form 내에 있을 시 submit돼버림
    assignSubjectColor(color)
    setSelectedColor()
    if (closeModal) closeModal()
  }
  return <ColorButtonRoot color={color} onClick={onClickButton} className={isSelected ? 'isSelected' : ''} />
}
