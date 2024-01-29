import * as s from './styled'
import * as cs from 'commonStyled'
import React, { useEffect, useRef, useState } from 'react'
import { defaultColor } from 'constants/color'
import { ColorPicker } from 'components/'
import { AnimatePresence } from 'framer-motion'
import { TodoItemType } from 'types'
import { useCreateSubjectMutation, useEditSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useForm } from 'hooks'
import { MAX_TIMER_NAME_CHARACTER_COUNT } from 'constants/maxCharacterCount'

type ActionModalProps = {
  isOpen: boolean
  closeModal: () => void
  todo?: TodoItemType
  closeEllipsisModal?: () => void
  type: 'ADD' | 'EDIT'
}
type IForm = {
  ADD: string
  EDIT: string
}
/**
 * * 타이머 과목 추가, 과목 수정 Modal
 */
export const ActionModal = ({ isOpen, closeModal, type, todo, closeEllipsisModal }: ActionModalProps) => {
  const [subjectColor, setSubjectColor] = useState(todo?.colorHex || defaultColor)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  const mutateCreateSubject = useCreateSubjectMutation()
  const mutateEditSubject = useEditSubjectMutation()
  const onKeyDown = (e: React.KeyboardEvent) => {
    // if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.isComposing) onClickConfirmButton()
    if (e.nativeEvent.key === 'Escape') closeModalAll()
  }
  const assignSubjectColor = (color: string) => setSubjectColor(color)
  const closeModalAll = () => type === 'EDIT' && closeEllipsisModal()
  const { register, handleSubmit, setValue } = useForm<IForm>()

  const onSubmit = (data: IForm) => {
    setIsConfirmed(true)
    // * ADD는 ExitComplete 시 mutate 실행하므로, 모달을 닫아주기만 하면 된다.
    if (type === 'ADD') {
      if (type === 'ADD')
        mutateCreateSubject({
          colorHex: subjectColor,
          name: data.ADD,
        })
      closeModal()
    } else {
      //EDIT
      closeModalAll()
      mutateEditSubject({
        colorHex: subjectColor,
        name: data.EDIT,
        subjectId: todo.subjectId,
      })
    }
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()

  // * ADD는 여기서
  const onExitComplete = () => {
    if (!isConfirmed) return
    setValue({ key: 'ADD', value: '' })
    setIsConfirmed(false)
  }
  useEffect(() => {
    inputRef?.current?.focus()
    if (type === 'ADD') setSubjectColor(defaultColor)
    if (type === 'EDIT') setValue({ key: 'EDIT', value: todo?.name || '' })
  }, [isOpen])

  /**
   * * ADD와 EDIT의 공통된 부분이다.
   * * 거의 동일하게 생겼지만, 애니메이션 때문에 분리하게 되었다.
   * ! EDIT는 애니메이션이 Ellipsis에 종속되어, 여기서 따로 AnimatePresence와 ModalWrapper을 사용하지 않는다.
   */
  const renderContent = () => (
    <>
      <cs.ModalFooter>
        <cs.GreenButton>확인</cs.GreenButton>
        <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
      </cs.ModalFooter>
      <s.ModalTitle>{type === 'ADD' ? '과목추가' : '과목수정'}</s.ModalTitle>
      <cs.ModalExitButton onClick={closeModal} />
      <s.InfoContainer>
        <s.UpperWrapper>
          과목명
          <s.NameInput
            placeholder="과목명을 입력해주세요"
            onKeyDown={onKeyDown}
            ref={inputRef}
            {...register(type, { maxLength: MAX_TIMER_NAME_CHARACTER_COUNT })}
          />
        </s.UpperWrapper>
        <s.LowerWrapper>
          <s.LowerTypo>색상선택</s.LowerTypo>
          <ColorPicker assignSubjectColor={assignSubjectColor} defaultColor={subjectColor} />
        </s.LowerWrapper>
      </s.InfoContainer>
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
            <s.Form onClick={onClickModal} onSubmit={handleSubmit(onSubmit)}>
              {renderContent()}
            </s.Form>
          </cs.ModalWrapper>
        )}
      </AnimatePresence>
    )
  }

  // EDIT
  return (
    <s.Form onClick={onClickModal} layoutId="ellipsis" onSubmit={handleSubmit(onSubmit)}>
      {renderContent()}
    </s.Form>
  )
}
