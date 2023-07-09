import React from 'react'
import {} from 'constants/color'
import { Root } from './styled'
import { ColorPicker } from './ColorPicker'

const ColorPickerModal = ({
  closeModal,
  assignSubjectColor,
}: {
  closeModal: () => void
  assignSubjectColor: (color: string) => void
}) => {
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  return (
    <Root onClick={onClickModal}>
      <ColorPicker closeModal={closeModal} assignSubjectColor={assignSubjectColor} />
    </Root>
  )
}

export default ColorPickerModal
