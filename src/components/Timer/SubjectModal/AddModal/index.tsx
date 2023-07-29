import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { defaultColor } from 'constants/color'
import { Root, InputWrapper, ModalTitle, NameInput, UpperWrapper, LowerWrapper, LowerTypo } from '../styled'
import { TodoItemType } from 'types'
import { addTodo } from 'modules/todos'
import { GreenButton, WhiteButton, ModalFooter, ModalWrapper, ModalExitButton } from 'components/common/commonStyle'
import ColorPickerModal from 'components/common/ColorPickerModal'
import { CreateSubjectResponseProps, createSubject } from 'api/subject/createSubject'
import { ColorPicker } from 'components/common/ColorPickerModal/ColorPicker'

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
      onClickConfirmButton()
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModal()
    }
  }
  const assignSubjectColor = (color: string) => {
    setSubjectColor(color)
  }
  const onClickConfirmButton = () => {
    if (inputValue === '') return

    createSubject({
      colorHex: subjectColor,
      name: inputValue,
    }).then((res) => {
      const result = res as CreateSubjectResponseProps
      const newTodoItem: TodoItemType = {
        name: inputValue,
        colorHex: subjectColor,
        subjectId: result.subjectId,
        time: 0,
      }
      dispatch(addTodo(newTodoItem))
      setInputValue('')
      closeModal()
    })
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
            <UpperWrapper>
              과목명
              <NameInput
                placeholder={`${title.slice(0, 2)}명을 입력해주세요`}
                onChange={onChange}
                onKeyDown={onKeyDown}
                ref={inputRef}
              />
            </UpperWrapper>
            <LowerWrapper>
              <LowerTypo>색상선택</LowerTypo>
              <ColorPicker assignSubjectColor={assignSubjectColor} />
              {/* <ColorPickerButton onClick={onClickColorButton} color={subjectColor}></ColorPickerButton> */}
            </LowerWrapper>
          </InputWrapper>
          <ModalFooter>
            <WhiteButton onClick={closeModal}>취소</WhiteButton>
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

export default AddModal
