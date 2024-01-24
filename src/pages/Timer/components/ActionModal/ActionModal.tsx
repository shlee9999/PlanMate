import React, { useEffect, useRef, useState } from 'react'
import { defaultColor } from 'constants/color'
import { ColorPicker } from 'components/'
import { AnimatePresence } from 'framer-motion'
import { TodoItemType } from 'types'
import { useCreateSubjectMutation, useEditSubjectMutation } from 'pages/Timer/hooks/mutations'
import * as cs from 'commonStyled'
import * as s from './styled'

type ActionModalProps = {
  isOpen: boolean
  closeModal: () => void
  todo?: TodoItemType
  closeEllipsisModal?: () => void
  type: 'ADD' | 'EDIT'
}
/**
 * * 타이머 과목 추가, 과목 수정 Modal
 */
export const ActionModal = ({ isOpen, closeModal, type, todo, closeEllipsisModal }: ActionModalProps) => {
  const [inputValue, setInputValue] = useState(todo?.name || '')
  const [subjectColor, setSubjectColor] = useState(todo?.colorHex || defaultColor)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  const mutateCreateSubject = useCreateSubjectMutation()
  const mutateEditSubject = useEditSubjectMutation()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // * 13글자로 제한해야, 삭제 모달에서도 깔끔하게 한 줄로 들어감.
    if (e.target.value.length > 13) return
    setInputValue(e.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.isComposing) onClickConfirmButton()
    if (e.nativeEvent.key === 'Escape') closeModal()
  }
  const assignSubjectColor = (color: string) => setSubjectColor(color)
  const closeModalAll = () => type === 'EDIT' && closeEllipsisModal()

  const onClickConfirmButton = () => {
    if (inputValue === '') return
    setIsConfirmed(true)
    // * ADD는 ExitComplete 시 mutate 실행하므로, 모달을 닫아주기만 하면 된다.
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

  // * ADD는 여기서
  const onExitComplete = () => {
    setInputValue('')
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

  /**
   * * ADD와 EDIT의 공통된 부분이다.
   * * 거의 동일하게 생겼지만, 애니메이션 때문에 분리하게 되었다.
   * ! EDIT는 애니메이션이 Ellipsis에 종속되어, 여기서 따로 AnimatePresence와 ModalWrapper을 사용하지 않는다.
   */
  const renderContent = () => (
    <>
      <s.ModalTitle>{type === 'ADD' ? '과목추가' : '과목수정'}</s.ModalTitle>
      <cs.ModalExitButton onClick={closeModal} />
      <s.InfoContainer>
        <s.UpperWrapper>
          과목명
          <s.NameInput
            value={inputValue}
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
    </>
  )

  if (type === 'ADD') {
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
            <s.Root onClick={onClickModal}>{renderContent()}</s.Root>
          </cs.ModalWrapper>
        )}
      </AnimatePresence>
    )
  }

  // EDIT
  return (
    <s.Root onClick={onClickModal} layoutId="ellipsis">
      {renderContent()}
    </s.Root>
  )
}
