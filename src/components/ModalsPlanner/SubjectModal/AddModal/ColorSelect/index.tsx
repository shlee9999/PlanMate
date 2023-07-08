import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPlan } from 'modules/todoplans'
import { SelectColorWrapper, ColorPickerButton } from '../TimeSelect/styled'
import { RootState } from 'modules'

//옵션 시간 추가 필요요
export const ColorSelect: React.FC = () => {
  const dispatch = useDispatch()
  const currentColor = useSelector((state: RootState) => state.todoplans.color)
  const [selectedColor, setSelectedColor] = useState('')

  const handleColorButtonClick = (color: string) => {
    //updatePlan 액션을 디스패치하여 color 상태 업데이트
    const updatedPlan = { ...currentColor, color: color }
    dispatch(addPlan(updatedPlan))
  }

  return (
    <SelectColorWrapper>
      <ColorPickerButton color={selectedColor} onClick={() => handleColorButtonClick(selectedColor)} />
    </SelectColorWrapper>
  )
}
