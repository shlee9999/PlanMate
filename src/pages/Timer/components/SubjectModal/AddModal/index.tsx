import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { defaultColor } from 'constants/color'
import { Root, InputWrapper, ModalTitle, NameInput, UpperWrapper, LowerWrapper, LowerTypo } from '../styled'
import { TodoItemType } from 'types'
import { addTodo } from 'modules/todos'

import ColorPickerModal from 'components/ColorPickerModal'
import { CreateSubjectResponseProps, createSubject } from 'api/subject/createSubject'
import { ColorPicker } from 'components/ColorPickerModal/ColorPicker'
import { ModalExitButton, ModalFooter, WhiteButton, GreenButton, ModalWrapper, ModalWrapperVar } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useCreateSubjectMutation from './hooks/useCreateSubjectMutation'

const AddModal = ({ isOpen, closeModal, title }: { isOpen: boolean; closeModal: () => void; title: string }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [subjectColor, setSubjectColor] = useState<string>(defaultColor)
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()
  const dispatch = useDispatch()
  const mutateCreateSubject = useCreateSubjectMutation()
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
    if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.isComposing) {
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
    mutateCreateSubject({
      colorHex: subjectColor,
      name: inputValue,
      callBack: () => {
        setInputValue('')
        closeModal()
      },
    })
  }

  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    inputRef?.current?.focus()
    setSubjectColor(defaultColor)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
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
                <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
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
      )}
    </AnimatePresence>
  )
}

export default AddModal
