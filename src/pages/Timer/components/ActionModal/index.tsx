import React, { useEffect, useRef, useState } from 'react'
import { defaultColor } from 'constants/color'
import { Root, InfoContainer, ModalTitle, NameInput, UpperWrapper, LowerWrapper, LowerTypo } from './styled'
import ColorPickerModal from 'components/ColorPickerModal'
import { ColorPicker } from 'components/ColorPickerModal/ColorPicker'
import { ModalExitButton, ModalFooter, WhiteButton, GreenButton, ModalWrapper, ModalWrapperVar } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useCreateSubjectMutation from 'pages/Timer/hooks/mutations/useCreateSubjectMutation'
import { TodoItemType } from 'types'
import useEditSubjectMutation from 'pages/Timer/hooks/mutations/useEditSubjectMutation'

type ActionModalProps = {
  isOpen: boolean
  closeModal: () => void
  todo?: TodoItemType
  closeEllipsisModal?: () => void
  type: 'ADD' | 'EDIT'
}
const ActionModal = ({ isOpen, closeModal, type, todo, closeEllipsisModal }: ActionModalProps) => {
  const [inputValue, setInputValue] = useState<string>(todo?.name || '')
  const [subjectColor, setSubjectColor] = useState<string>(todo?.colorHex || defaultColor)
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()
  const mutateEditSubject = useEditSubjectMutation()
  const mutateCreateSubject = useCreateSubjectMutation()
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false)
    inputRef.current?.focus()
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.isComposing) onClickConfirmButton()
    if (e.nativeEvent.key === 'Escape') closeModal()
  }
  const assignSubjectColor = (color: string) => setSubjectColor(color)
  const closeModalAll = () => type === 'EDIT' && closeEllipsisModal()

  const onClickConfirmButton = () => {
    if (inputValue === '') return
    if (type === 'ADD') {
      mutateCreateSubject({
        colorHex: subjectColor,
        name: inputValue,
        callBack: () => {
          setInputValue('')
          closeModal()
        },
      })
    } else {
      //EDIT
      mutateEditSubject({
        colorHex: subjectColor,
        name: inputValue,
        subjectId: todo.subjectId,
        callBack: closeModalAll,
      })
    }
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
  useEffect(() => {
    inputRef?.current?.focus()
    if (type === 'ADD') setSubjectColor(defaultColor)
  }, [isOpen])
  if (type === 'ADD')
    return (
      <AnimatePresence>
        {isOpen && (
          <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
            <Root onClick={onClickModal}>
              <ModalTitle>과목추가</ModalTitle>
              <ModalExitButton onClick={closeModal} />
              <InfoContainer>
                <UpperWrapper>
                  과목명
                  <NameInput
                    placeholder="과목명을 입력해주세요"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    ref={inputRef}
                  />
                </UpperWrapper>
                <LowerWrapper>
                  <LowerTypo>색상선택</LowerTypo>
                  <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
                </LowerWrapper>
              </InfoContainer>
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
  //EDIT
  return (
    <Root onClick={onClickModal} layoutId="ellipsis">
      <ModalTitle>과목수정</ModalTitle>
      <ModalExitButton onClick={closeModal} />
      <InfoContainer>
        <UpperWrapper>
          과목명
          <NameInput defaultValue={todo.name} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
        </UpperWrapper>
        <LowerWrapper>
          <LowerTypo>색상선택</LowerTypo>
          <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
        </LowerWrapper>
      </InfoContainer>
      <ModalFooter>
        <WhiteButton onClick={closeModal}>취소</WhiteButton>
        <GreenButton onClick={onClickConfirmButton}>확인</GreenButton>
      </ModalFooter>
    </Root>
  )
}

export default ActionModal