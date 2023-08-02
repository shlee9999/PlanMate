import React from 'react'
import { useState } from 'react'
import { ButtonWrapper, CloseButton, DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { useDispatch } from 'react-redux'
import { TodoItemType } from 'types'

import { removeTodo } from 'modules/todos'
import { GreenButton, WhiteButton, ModalFooter, ModalWrapper, ModalExitButton } from 'components/common/commonStyle'
import EditModal from '../SubjectModal/EditModal'
import { removeSubject } from 'api/subject/removeSubject'
import { DeleteModal } from './DeleteModal'

const EllipsisModal = ({
  closeModal,
  todo,
  isTodoTimerRunning,
}: {
  closeModal: () => void
  todo: TodoItemType
  isTodoTimerRunning: boolean
}) => {
  const [mode, setMode] = useState<string>('edit') // 'edit' | 'delete'
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const dispatch = useDispatch()

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }
  const onClickDeleteButton = () => {
    setIsDeleteModalOpen(true)
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const onClickEditButton = () => {
    setIsEditModalOpen(true)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }
  const deleteSubject = () => {
    if (isTodoTimerRunning) return //타이머 가고 있을 때 삭제 불가
    removeSubject({
      subjectId: todo.subjectId,
    }).then((res) => {
      if (res) {
        dispatch(removeTodo(todo.subjectId))
        closeModal()
      }
    })
    closeModal()
  }

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
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
        <EditModal
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
          title="과목수정"
          todo={todo}
          closeEllipsisModal={closeModal}
        />
      )}
      {isDeleteModalOpen && <DeleteModal closeModal={closeDeleteModal} deleteSubject={deleteSubject} />}
    </ModalWrapper>
  )
}
export default EllipsisModal
