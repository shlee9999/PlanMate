import React from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'
import { TodoItemType } from 'types'
import { DeleteModal } from './DeleteModal/DeleteModal'
import { AnimatePresence } from 'framer-motion'
import { ActionModal } from '..'
import { useEllipsisModal } from './useEllipsisModal'

type EllipsisModalProps = {
  closeModal: () => void
  todo: TodoItemType
  isOpen: boolean
}
export const EllipsisModal = ({ closeModal, todo, isOpen }: EllipsisModalProps) => {
  const {
    onClickDeleteButton,
    onClickModal,
    onClickEditButton,
    deleteConfirm,
    onExitComplete,
    isDeleteModalOpen,
    isEditModalOpen,
    closeDeleteModal,
    closeEditModal,
  } = useEllipsisModal({ closeModal, todo, isOpen })

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
          <s.EllipsisModal onClick={onClickModal} layoutId="ellipsis">
            <s.ButtonWrapper>
              <s.UpdateSubjectButton onClick={onClickEditButton}>과목수정</s.UpdateSubjectButton>
              <s.DeleteSubjectButton onClick={onClickDeleteButton}>과목삭제</s.DeleteSubjectButton>
            </s.ButtonWrapper>
            <cs.ModalFooter>
              <s.CloseButton onClick={closeModal}>취소</s.CloseButton>
            </cs.ModalFooter>
            <cs.ModalExitButton onClick={closeModal} />
          </s.EllipsisModal>
          {isEditModalOpen && (
            // * EditModal
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
