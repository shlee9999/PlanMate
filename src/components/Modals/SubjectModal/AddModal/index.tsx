import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Root,
  ModalExitButton,
  ModalFooter,
  InputWrapper,
  ColorPickerButton,
  ModalTitle,
  NameInput,
  ExitButton,
  OKButton,
  ButtonTypoWrapper,
} from '../styled'
import { TodoItems } from 'types'
import ColorPickerModal from 'components/Modals/ColorPickerModal'
import { generateId } from 'utils/helper'
import { ModalWrapper } from 'components/Modals/styled'
const DefaultColor: string = '#ff0000' as const
const AddModal = ({
  isModalOpen,
  closeModal,
  title,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor)
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false)
    inputRef.current?.focus()
  }
  const handleOnClickColorButton = () => {
    setIsColorPickerModalOpen(true)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      handleAddConfirm()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }
  const handleAddConfirm = () => {
    if (inputValue === '') return
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: title === '과목추가' ? 'study' : 'exercise',
      time: 0,
      id: generateId(),
    }
    dispatch({ type: 'ADD_TODO', value: newTodoItem })
    setInputValue('')
    closeModalAll()
  }

  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }
  const closeModalAll = () => {
    if (isColorPickerModalOpen) closeColorPickerModal()
    closeModal()
  }
  useEffect(() => {
    if (!inputRef || !inputRef.current) return
    if (isModalOpen) {
      inputRef.current.focus()
      setSubjectColor(DefaultColor)
    }
  }, [isModalOpen])

  if (isModalOpen)
    return (
      <ModalWrapper onClick={closeModalAll}>
        <Root onClick={handleModalClick}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeModalAll} />
          <InputWrapper>
            <ButtonTypoWrapper>
              과목명
              <NameInput
                placeholder={`${title.slice(0, 2)}명을 입력해주세요`}
                onChange={handleInputChange}
                onKeyDown={handleOnKeyDown}
                ref={inputRef}
              />
            </ButtonTypoWrapper>
            <ButtonTypoWrapper>
              색상선택
              <ColorPickerButton onClick={handleOnClickColorButton} color={subjectColor}></ColorPickerButton>
            </ButtonTypoWrapper>
          </InputWrapper>
          <ModalFooter>
            <ExitButton onClick={closeModalAll}>취소</ExitButton>
            <OKButton onClick={handleAddConfirm}>확인</OKButton>
          </ModalFooter>
          {isColorPickerModalOpen && (
            <ColorPickerModal closeModal={closeColorPickerModal} assignSubjectColor={assignSubjectColor} />
          )}
        </Root>
      </ModalWrapper>
    )

  return null
}

export default AddModal
