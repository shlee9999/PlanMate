import React from 'react'
import { ColorList } from 'utils/helper'
import { Root } from './styles'
import ColorButton from './ColorButton'

const colorList = ColorList
const ColorPickerModal = ({
  closeModal,
  assignSubjectColor,
}: {
  closeModal: () => void
  // eslint-disable-next-line
  assignSubjectColor: (color: string) => void
}) => {
  const handleClickModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }
  return (
    <Root onClick={handleClickModal}>
      <div>
        {colorList.map((row: Array<string>, rowIndex: number) => (
          <div key={rowIndex}>
            {row.map((color: string, index: number) => (
              <ColorButton
                key={index}
                color={color}
                closeModal={closeModal}
                assignSubjectColor={assignSubjectColor}
              ></ColorButton>
            ))}
          </div>
        ))}
      </div>
    </Root>
  )
}

export default ColorPickerModal
