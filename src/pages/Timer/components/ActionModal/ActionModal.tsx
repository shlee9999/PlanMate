import React, { useEffect, useRef, useState } from 'react'
import { defaultColor } from 'constants/color'
import { ColorPicker } from 'components/'
import { AnimatePresence } from 'framer-motion'
import { TodoItemType } from 'types'
import useCreateSubjectMutation from 'pages/Timer/hooks/mutations/useCreateSubjectMutation'
import useEditSubjectMutation from 'pages/Timer/hooks/mutations/useEditSubjectMutation'
import * as cs from 'commonStyled'
import * as s from './styled'

type ActionModalProps = {
  isOpen: boolean
  closeModal: () => void
  todo?: TodoItemType
  closeEllipsisModal?: () => void
  type: 'ADD' | 'EDIT'
}

export const ActionModal = ({ isOpen, closeModal, type, todo, closeEllipsisModal }: ActionModalProps) => {
  const [inputValue, setInputValue] = useState<string>(todo?.name || '')
  const [subjectColor, setSubjectColor] = useState<string>(todo?.colorHex || defaultColor)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  const mutateCreateSubject = useCreateSubjectMutation()
  const mutateEditSubject = useEditSubjectMutation()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.isComposing) onClickConfirmButton()
    if (e.nativeEvent.key === 'Escape') closeModal()
  }
  const assignSubjectColor = (color: string) => setSubjectColor(color)
  const closeModalAll = () => type === 'EDIT' && closeEllipsisModal()

  const onClickConfirmButton = () => {
    if (inputValue === '') return
    setIsConfirmed(true)
    if (type === 'ADD') closeModal()
    else {
      //EDIT
      closeModalAll()
      mutateEditSubject({
        colorHex: subjectColor,
        name: inputValue,
        subjectId: todo.subjectId,
      })
    }
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
  const onExitComplete = () => {
    if (!isConfirmed) return
    if (type === 'ADD')
      mutateCreateSubject({
        colorHex: subjectColor,
        name: inputValue,
      })
    setIsConfirmed(false)
  }
  useEffect(() => {
    inputRef?.current?.focus()
    if (type === 'ADD') setSubjectColor(defaultColor)
  }, [isOpen])
  if (type === 'ADD')
    return (
      <AnimatePresence onExitComplete={onExitComplete}>
        {isOpen && (
          <cs.ModalWrapper
            onClick={closeModal}
            variants={cs.ModalWrapperVar}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <s.Root onClick={onClickModal}>
              <s.ModalTitle>과목추가</s.ModalTitle>
              <cs.ModalExitButton onClick={closeModal} />
              <s.InfoContainer>
                <s.UpperWrapper>
                  과목명
                  <s.NameInput
                    placeholder="과목명을 입력해주세요"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    ref={inputRef}
                  />
                </s.UpperWrapper>
                <s.LowerWrapper>
                  <s.LowerTypo>색상선택</s.LowerTypo>
                  <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
                </s.LowerWrapper>
              </s.InfoContainer>
              <cs.ModalFooter>
                <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
                <cs.GreenButton onClick={onClickConfirmButton}>확인</cs.GreenButton>
              </cs.ModalFooter>
            </s.Root>
          </cs.ModalWrapper>
        )}
      </AnimatePresence>
    )
  //EDIT
  return (
    <s.Root onClick={onClickModal} layoutId="ellipsis">
      <s.ModalTitle>과목수정</s.ModalTitle>
      <cs.ModalExitButton onClick={closeModal} />
      <s.InfoContainer>
        <s.UpperWrapper>
          과목명
          <s.NameInput defaultValue={todo.name} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
        </s.UpperWrapper>
        <s.LowerWrapper>
          <s.LowerTypo>색상선택</s.LowerTypo>
          <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
        </s.LowerWrapper>
      </s.InfoContainer>
      <cs.ModalFooter>
        <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
        <cs.GreenButton onClick={onClickConfirmButton}>확인</cs.GreenButton>
      </cs.ModalFooter>
    </s.Root>
  )
}
