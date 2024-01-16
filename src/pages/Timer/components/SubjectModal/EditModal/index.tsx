import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Root, InputWrapper, ModalTitle, NameInput, UpperWrapper, LowerWrapper, LowerTypo } from '../styled'
import { TodoItemType } from 'types'
import { updateTodo } from 'modules/todos'

import { editSubject } from 'api/subject/editSubject'
import { ColorPicker } from 'components/ColorPickerModal/ColorPicker'
import { ModalExitButton, ModalFooter, WhiteButton, GreenButton } from 'commonStyled'
import useEditSubjectMutation from '../../../hooks/mutations/useEditSubjectMutation'

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

  const inputRef = useRef<HTMLInputElement | null>(null)

  const mutateEditSubject = useEditSubjectMutation()

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
    mutateEditSubject({
      colorHex: subjectColor,
      name: inputValue,
      subjectId: todo.subjectId,
      callBack: closeModalAll,
    })
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }
  const closeModalAll = () => {
    closeEllipsisModal()
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

  return (
    <Root onClick={onClickModal} layoutId="ellipsis">
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
        </LowerWrapper>
      </InputWrapper>
      <ModalFooter>
        <WhiteButton onClick={closeEditModal}>취소</WhiteButton>
        <GreenButton onClick={onClickConfirmButton}>확인</GreenButton>
      </ModalFooter>
    </Root>
  )
}

export default EditModal
