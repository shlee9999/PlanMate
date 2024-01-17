import React from 'react'
import { useState } from 'react'
import { ButtonWrapper, CloseButton, DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { TodoItemType } from 'types'
import { DeleteModal } from './DeleteModal'
import { ModalFooter, ModalExitButton, ModalWrapper, ModalWrapperVar } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useDeleteSubjectMutation from '../../hooks/mutations/useDeleteSubjectMutation'
import { ActionModal } from '..'

type EllipsisModalProps = {
  closeModal: () => void
  todo: TodoItemType
  isOpen: boolean
}
const EllipsisModal = ({ closeModal, todo, isOpen }: EllipsisModalProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const mutateDeleteSubject = useDeleteSubjectMutation()
  const closeDeleteModal = () => setIsDeleteModalOpen(false)
  const onClickDeleteButton = () => setIsDeleteModalOpen(true)
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
  const onClickEditButton = () => setIsEditModalOpen(true)
  const closeEditModal = () => setIsEditModalOpen(false)
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false)

  const deleteConfirm = () => {
    setIsDeleteConfirmed(true)
    closeModal()
  }

  const onExitComplete = () => {
    if (isDeleteConfirmed) {
      // confirm버튼 눌렀을 때만 작동하도록
      mutateDeleteSubject({ subjectId: todo.subjectId })
      setIsDeleteConfirmed(false)
    }
  }
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
          <Root onClick={onClickModal} layoutId="ellipsis">
            <ButtonWrapper>
              <UpdateSubjectButton onClick={onClickEditButton}>과목수정</UpdateSubjectButton>
              <DeleteSubjectButton onClick={onClickDeleteButton}>과목삭제</DeleteSubjectButton>
            </ButtonWrapper>
            <ModalFooter>
              <CloseButton onClick={closeModal}>취소</CloseButton>
            </ModalFooter>
            <ModalExitButton onClick={closeModal} />
          </Root>
          {isEditModalOpen && (
            <ActionModal
              isOpen={isEditModalOpen}
              closeModal={closeEditModal}
              type="EDIT"
              todo={todo}
              closeEllipsisModal={closeModal}
            />
          )}
          {isDeleteModalOpen && (
            <DeleteModal closeModal={closeDeleteModal} deleteConfirm={deleteConfirm} title={todo.name} />
          )}
        </ModalWrapper>
      )}
    </AnimatePresence>
  )
}
export default EllipsisModal
