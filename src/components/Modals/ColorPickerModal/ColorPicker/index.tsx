import { FC } from 'react'
import { ColorButtonWrapper, RowWrapper } from '../styled'
import { colorList } from 'constants/color'
import ColorButton from '../ColorButton'

type ColorPickerProps = {
  closeModal: () => void
  assignSubjectColor: (color: string) => void
}

export const ColorPicker: FC<ColorPickerProps> = ({ closeModal, assignSubjectColor }) => {
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
            ></ColorButton>
          ))}
        </RowWrapper>
      ))}
    </ColorButtonWrapper>
  )
}
