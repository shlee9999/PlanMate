import React from 'react'
import { colorList } from 'constants/color'
import { Root } from './styled'
import { ColorButton } from './Colorbutton'

type ColorSelectProps = {
  assignSubjectColor: (color: string) => void
}

export const ColorSelect: React.FC<ColorSelectProps> = ({ assignSubjectColor }) => {
  return (
    <Root>
      <div>
        {colorList.map((row: Array<string>, rowIndex: number) => (
          <div key={rowIndex}>
            {row.map((color: string, index: number) => (
              <ColorButton key={index} color={color} assignSubjectColor={assignSubjectColor} />
            ))}
          </div>
        ))}
      </div>
    </Root>
  )
}
