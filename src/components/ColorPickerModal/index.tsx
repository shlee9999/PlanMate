import React from 'react'
import {} from 'constants/color'
import { Root } from './styled'
import { ColorPicker } from './ColorPicker'
import { ColorPickerModalWrapper } from './ColorPicker/styled'

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
  const closeColorPickerModal = (e: React.MouseEvent<HTMLDivElement>) => {
    closeModal()
    e.stopPropagation()
  }
  return (
    <>
      <ColorPickerModalWrapper onClick={closeColorPickerModal}></ColorPickerModalWrapper>
      <Root onClick={onClickModal}>
        <ColorPicker closeModal={closeModal} assignSubjectColor={assignSubjectColor} defaultColor="#444444" />
      </Root>
    </>
  )
}

export default ColorPickerModal
