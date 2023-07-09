import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Root, ModalExitButton, ModalFooter, InputWrapper, ColorPickerButton, ModalTitle, NameInput } from '../styled'
import { TodoItems } from 'types'
import ColorPickerModal from '../../ColorPickerModal'
import { ConfirmButton, ExitButton, ModalWrapper } from 'components/Modals/styled'
import { updateTodo } from 'modules/todos'

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
  const onClickColorButton = () => {
    setIsColorPickerModalOpen(true)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      onEditConfirm()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }

  const onEditConfirm = () => {
    if (inputValue === '') return
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: todo.category,
      time: todo.time,
      id: todo.id,
    }
    dispatch(updateTodo(newTodoItem, todo.id))
    setInputValue('')
    closeModalAll()
    console.log(todo.id)
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
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
      <ModalWrapper onClick={closeModal}>
        <Root onClick={onClickModal}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeModalAll} />
          <InputWrapper>
            <NameInput defaultValue={todo.title} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
            <ColorPickerButton onClick={onClickColorButton} color={subjectColor}>
              {title.slice(0, 2)}색상
            </ColorPickerButton>
          </InputWrapper>
          <ModalFooter>
            <ExitButton onClick={closeModalAll}>취소</ExitButton>
            <ConfirmButton onClick={onEditConfirm}>확인</ConfirmButton>
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
