import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { defaultColor } from 'constants/color'
import {
  Root,
  ModalExitButton,
  ModalFooter,
  InputWrapper,
  ColorPickerButton,
  ModalTitle,
  NameInput,
  ButtonTypoWrapper,
} from '../styled'
import { TodoItems } from 'types'

import { generateId } from 'utils/helper'

import { addTodo } from 'modules/todos'
import { ConfirmButton, ExitButton, ModalWrapper } from 'components/common/commonStyle'
import ColorPickerModal from 'components/common/ColorPickerModal'

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
  const [subjectColor, setSubjectColor] = useState<string>(defaultColor)
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
      onConfirmButtonClick()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModal()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }
  const onConfirmButtonClick = () => {
    if (inputValue === '') return
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: title === '과목추가' ? 'study' : 'exercise',
      time: 0,
      id: generateId(),
    }
    dispatch(addTodo(newTodoItem))
    setInputValue('')
    closeModal()
  }

  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (!inputRef || !inputRef.current) return
    if (isModalOpen) {
      inputRef.current.focus()
      setSubjectColor(defaultColor)
    }
  }, [isModalOpen])

  if (isModalOpen)
    return (
      <ModalWrapper onClick={closeModal}>
        <Root onClick={onClickModal}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeModal} />
          <InputWrapper>
            <ButtonTypoWrapper>
              과목명
              <NameInput
                placeholder={`${title.slice(0, 2)}명을 입력해주세요`}
                onChange={onChange}
                onKeyDown={onKeyDown}
                ref={inputRef}
              />
            </ButtonTypoWrapper>
            <ButtonTypoWrapper>
              색상선택
              <ColorPickerButton onClick={onClickColorButton} color={subjectColor}></ColorPickerButton>
            </ButtonTypoWrapper>
          </InputWrapper>
          <ModalFooter>
            <ExitButton onClick={closeModal}>취소</ExitButton>
            <ConfirmButton onClick={onConfirmButtonClick}>확인</ConfirmButton>
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
