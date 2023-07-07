import React from 'react'
import { StyledSelect, SelectOption } from './styled'

//옵션 시간 추가 필요요
export const TimeSelect: React.FC = () => {
  return (
    <StyledSelect>
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
      <SelectOption value="option3">Option 3</SelectOption>
    </StyledSelect>
  )
}
