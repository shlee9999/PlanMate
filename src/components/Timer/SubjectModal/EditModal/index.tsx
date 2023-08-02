import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Root,
  InputWrapper,
  ColorPickerButton,
  ModalTitle,
  NameInput,
  UpperWrapper,
  LowerWrapper,
  LowerTypo,
} from '../styled'
import { TodoItemType } from 'types'
import { updateTodo } from 'modules/todos'
import { GreenButton, WhiteButton, ModalFooter, ModalWrapper, ModalExitButton } from 'components/common/commonStyle'
import ColorPickerModal from 'components/common/ColorPickerModal'
import { editSubject } from 'api/subject/editSubject'
import { ColorPicker } from 'components/common/ColorPickerModal/ColorPicker'

const EditModal = ({
  isModalOpen,
  closeModal,
  title,
  todo,
  closeEllipsisModal,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
  todo: TodoItemType
  closeEllipsisModal: () => void
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
    editSubject({
      colorHex: subjectColor,
      name: inputValue,
      subjectId: todo.subjectId,
    }).then((res) => {
      if (res) {
        if (inputValue === '') return
        const newTodoItem: TodoItemType = {
          name: inputValue,
          colorHex: subjectColor,
          subjectId: todo.subjectId,
          time: todo.time,
        }
        dispatch(updateTodo(newTodoItem, todo.subjectId))
        setInputValue('')
        closeEllipsisModal()
      }
    })
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
            <UpperWrapper>
              과목명
              <NameInput defaultValue={todo.name} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
            </UpperWrapper>
            <LowerWrapper>
              <LowerTypo>색상선택</LowerTypo>
              <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
              {/* <ColorPickerButton onClick={onClickColorButton} color={subjectColor}>
              {title.slice(0, 2)}색상
            </ColorPickerButton> */}
            </LowerWrapper>
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
