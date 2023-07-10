import React, { useState, ChangeEvent } from 'react'
import { StyledCategorySelect, SelectOption, SelectWrapper } from '../TimeSelect/styled'

//옵션 시간 추가 필요요
export const CategorySelect: React.FC = () => {
  const [selectedCategory, setselectedCategory] = useState<string>('')

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setselectedCategory(e.target.value)
  }

  return (
    <SelectWrapper>
      <StyledCategorySelect value={selectedCategory} onChange={handleCategoryChange}>
        <option value="" disabled hidden>
          선택해주세요.
        </option>
        <SelectOption value="과목">과목</SelectOption>
        <SelectOption value="운동">운동</SelectOption>
        <SelectOption value="기타">기타</SelectOption>
      </StyledCategorySelect>
    </SelectWrapper>
  )
}
