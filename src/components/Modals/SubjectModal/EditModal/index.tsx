import React from 'react'
import { useEffect, useRef, useState } from 'react'
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
} from '../styled'
import { TodoItems } from 'types'
import ColorPickerModal from '../../ColorPickerModal'
import { ModalWrapper } from 'components/Modals/styled'

const EditModal = ({
  isModalOpen,
  closeModal,
  title,
  todo,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
  todo: TodoItems
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(todo.color)
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
      handleEditConfirm()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const handleEditConfirm = () => {
    if (inputValue === '') return
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: todo.category,
      time: todo.time,
      id: todo.id,
    }
    dispatch({ type: 'UPDATE_TODO', value: newTodoItem, id: todo.id })
    setInputValue('')
    closeModalAll()
    console.log(todo.id)
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
      setInputValue(inputRef.current.value)
    }
  }, [isModalOpen])

  if (isModalOpen)
    return (
      <ModalWrapper onClick={closeModalAll}>
        <Root onClick={handleModalClick}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeModalAll} />
          <InputWrapper>
            <NameInput
              defaultValue={todo.title}
              onChange={handleInputChange}
              onKeyDown={handleOnKeyDown}
              ref={inputRef}
            />
            <ColorPickerButton onClick={handleOnClickColorButton} color={subjectColor}>
              {title.slice(0, 2)}색상
            </ColorPickerButton>
          </InputWrapper>
          <ModalFooter>
            <ExitButton onClick={closeModalAll}>취소</ExitButton>
            <OKButton onClick={handleEditConfirm}>확인</OKButton>
          </ModalFooter>
          {isColorPickerModalOpen && (
            <ColorPickerModal closeModal={closeColorPickerModal} assignSubjectColor={assignSubjectColor} />
          )}
        </Root>
      </ModalWrapper>
    )

  return null
}

export default EditModal
