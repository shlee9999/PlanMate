import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Root, InputWrapper, ColorPickerButton, ModalTitle, NameInput } from '../styled'
import { TodoItemType } from 'types'
import { updateTodo } from 'modules/todos'
import { GreenButton, WhiteButton, ModalFooter, ModalWrapper, ModalExitButton } from 'components/common/commonStyle'
import ColorPickerModal from 'components/common/ColorPickerModal'

const EditModal = ({
  isModalOpen,
  closeModal,
  title,
  todo,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
  todo: TodoItemType
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(todo.colorHex)
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false)
    inputRef.current?.focus()
  }
  const onClickColorButton = () => {
    setIsColorPickerModalOpen(true)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      onClickConfirmButton()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const onClickConfirmButton = () => {
    if (inputValue === '') return
    const newTodoItem: TodoItemType = {
      name: inputValue,
      colorHex: subjectColor,
      subjectId: todo.subjectId,
      time: todo.time,
    }
    dispatch(updateTodo(newTodoItem, todo.subjectId))
    setInputValue('')
    closeModalAll()
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }
  const closeModalAll = () => {
    if (isColorPickerModalOpen) closeColorPickerModal()
    closeModal()
  }
  const closeEditModal = (e: React.MouseEvent<HTMLElement>) => {
    closeModal()
    e.stopPropagation()
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
      <ModalWrapper onClick={closeEditModal}>
        <Root onClick={onClickModal}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeEditModal} />
          <InputWrapper>
            <NameInput defaultValue={todo.name} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
            <ColorPickerButton onClick={onClickColorButton} color={subjectColor}>
              {title.slice(0, 2)}색상
            </ColorPickerButton>
          </InputWrapper>
          <ModalFooter>
            <WhiteButton onClick={closeEditModal}>취소</WhiteButton>
            <GreenButton onClick={onClickConfirmButton}>확인</GreenButton>
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
