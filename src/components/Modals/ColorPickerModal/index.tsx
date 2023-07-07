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
  const handleClickModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }
  return (
    <Root onClick={handleClickModal}>
      <ColorPicker closeModal={closeModal} assignSubjectColor={assignSubjectColor} />
    </Root>
  )
}

export default ColorPickerModal
