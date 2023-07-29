import React from 'react'
import { useState } from 'react'
import { ButtonWrapper, DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { useDispatch } from 'react-redux'
import { TodoItemType } from 'types'

import { removeTodo } from 'modules/todos'
import { GreenButton, WhiteButton, ModalFooter, ModalWrapper, ModalExitButton } from 'components/common/commonStyle'
import EditModal from '../SubjectModal/EditModal'

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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const dispatch = useDispatch()

  const onClickDeleteButton = () => {
    setMode('delete')
  }
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const onClickEditButton = () => {
    setMode('edit')
  }
  const onClickConfirmButton = () => {
    if (mode === 'edit') {
      setIsEditModalOpen(true)
      return
    }
    if (mode === 'delete') {
      if (isTodoTimerRunning) return //타이머 가고 있을 때 삭제 불가
      dispatch(removeTodo(todo.subjectId))
      closeModal()
      return
    }
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <ButtonWrapper>
          <UpdateSubjectButton onClick={onClickEditButton}>과목수정</UpdateSubjectButton>
          <DeleteSubjectButton onClick={onClickDeleteButton}>과목삭제</DeleteSubjectButton>
        </ButtonWrapper>
        <ModalFooter>
          <WhiteButton onClick={closeModal}>취소</WhiteButton>
          <GreenButton onClick={onClickConfirmButton}>확인</GreenButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
      {isEditModalOpen && (
        <EditModal isModalOpen={isEditModalOpen} closeModal={closeEditModal} title="과목수정" todo={todo} />
      )}
    </ModalWrapper>
  )
}
export default EllipsisModal
