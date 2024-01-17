import React from 'react'
import { useState } from 'react'
import { TodoItemType } from 'types'
import { DeleteModal } from './DeleteModal'
import { AnimatePresence } from 'framer-motion'
import { ActionModal } from '..'
import useDeleteSubjectMutation from '../../hooks/mutations/useDeleteSubjectMutation'
import * as cs from 'commonStyled'
import * as s from './styled'

type EllipsisModalProps = {
  closeModal: () => void
  todo: TodoItemType
  isOpen: boolean
}
export const EllipsisModal = ({ closeModal, todo, isOpen }: EllipsisModalProps) => {
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
        <cs.ModalWrapper
          onClick={closeModal}
          variants={cs.ModalWrapperVar}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <s.Root onClick={onClickModal} layoutId="ellipsis">
            <s.ButtonWrapper>
              <s.UpdateSubjectButton onClick={onClickEditButton}>과목수정</s.UpdateSubjectButton>
              <s.DeleteSubjectButton onClick={onClickDeleteButton}>과목삭제</s.DeleteSubjectButton>
            </s.ButtonWrapper>
            <cs.ModalFooter>
              <s.CloseButton onClick={closeModal}>취소</s.CloseButton>
            </cs.ModalFooter>
            <cs.ModalExitButton onClick={closeModal} />
          </s.Root>
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
        </cs.ModalWrapper>
      )}
    </AnimatePresence>
  )
}
