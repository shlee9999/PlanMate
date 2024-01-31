import * as s from './styled'
import * as cs from 'commonStyled'
import React from 'react'
import { ColorPicker } from 'components/'
import { AnimatePresence } from 'framer-motion'
import { TodoItemType } from 'types'
import { MAX_TIMER_NAME_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { useActionModal } from './hooks'

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
  const {
    registerInput,
    handleSubmit,
    onKeyDown,
    onClickModal,
    onSubmit,
    onExitComplete,
    setSubjectColor,
    subjectColor,
  } = useActionModal({
    isOpen,
    closeModal,
    todo,
    closeEllipsisModal,
    type,
  })
  /**
   * * ADD와 EDIT의 공통된 부분이다.
   * * 거의 동일하게 생겼지만, 애니메이션 때문에 분리하게 되었다.
   * ! EDIT는 애니메이션이 Ellipsis에 종속되어, 여기서 따로 AnimatePresence와 ModalWrapper을 사용하지 않는다.
   */
  const renderContent = () => (
    <>
      <cs.ModalFooter>
        <cs.GreenButton>확인</cs.GreenButton>
        <cs.WhiteButton type="button" onClick={closeModal}>
          취소
        </cs.WhiteButton>
      </cs.ModalFooter>
      <s.ModalTitle>{type === 'ADD' ? '과목추가' : '과목수정'}</s.ModalTitle>
      {/* <cs.ModalExitButton onClick={closeModal} /> */}
      <s.InfoContainer>
        <s.UpperWrapper>
          과목명
          <s.NameInput
            placeholder="과목명을 입력해주세요"
            onKeyDown={onKeyDown}
            {...registerInput(type, { maxLength: MAX_TIMER_NAME_CHARACTER_COUNT })}
          />
        </s.UpperWrapper>
        <s.LowerWrapper>
          <s.LowerTypo>색상선택</s.LowerTypo>
          <ColorPicker assignSubjectColor={setSubjectColor} defaultColor={subjectColor} />
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
