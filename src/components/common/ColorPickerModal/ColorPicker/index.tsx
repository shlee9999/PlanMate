import { FC, useState } from 'react'
import { ColorButtonWrapper, RowWrapper } from '../styled'
import { colorList, defaultColor } from 'constants/color'
import ColorButton from '../ColorButton'

type ColorPickerProps = {
  closeModal?: () => void
  assignSubjectColor: (color: string) => void
}

export const ColorPicker: FC<ColorPickerProps> = ({ closeModal, assignSubjectColor }) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor)
  return (
    <ColorButtonWrapper>
      {colorList.map((row: Array<string>, rowIndex: number) => (
        <RowWrapper key={rowIndex}>
          {row.map((color: string, index: number) => (
            <ColorButton
              key={index}
              color={color}
              closeModal={closeModal}
              assignSubjectColor={assignSubjectColor}
              isSelected={selectedColor === color}
              setSelectedColor={() => setSelectedColor(color)}
            />
          ))}
        </RowWrapper>
      ))}
    </ColorButtonWrapper>
  )
}
