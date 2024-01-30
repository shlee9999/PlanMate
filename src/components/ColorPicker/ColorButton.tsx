import React from 'react'
import * as s from './styled'

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
  const onClickButton = () => {
    assignSubjectColor(color)
    setSelectedColor()
    if (closeModal) closeModal()
  }
  return (
    <s.ColorButton type="button" color={color} onClick={onClickButton} className={isSelected ? 'isSelected' : ''} />
  )
}
