import React from 'react'
import { Root } from './styled'

export const ColorButton = ({
  color,
  assignSubjectColor,
}: {
  color: string
  // eslint-disable-next-line
  assignSubjectColor: (color: string) => void
}) => {
  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    assignSubjectColor(color)
  }
  return <Root color={color} onClick={onClickButton}></Root>
}
