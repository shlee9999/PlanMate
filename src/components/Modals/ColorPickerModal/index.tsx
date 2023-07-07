import React from 'react'
import { colorList } from 'constants/color'
import { ColorButtonWrapper, Root } from './styled'
import ColorButton from './ColorButton'

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
          <ColorButtonWrapper key={rowIndex}>
            {row.map((color: string, index: number) => (
              <ColorButton
                key={index}
                color={color}
                closeModal={closeModal}
                assignSubjectColor={assignSubjectColor}
              ></ColorButton>
            ))}
          </ColorButtonWrapper>
        ))}
      </div>
    </Root>
  )
}

export default ColorPickerModal
