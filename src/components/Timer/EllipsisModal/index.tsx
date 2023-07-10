import React from 'react'
import { useState } from 'react'
import { ButtonWrapper, DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { useDispatch } from 'react-redux'
import { TodoItems } from 'types'
import { ModalExitButton, ModalFooter } from '../SubjectModal/styled'
import { removeTodo } from 'modules/todos'
import { ConfirmButton, ExitButton, ModalWrapper } from 'components/common/commonStyle'
import SubjectModal from '../SubjectModal'
const EllipsisModal = ({
  closeModal,
  todo,
  isTodoTimerRunning,
}: {
  closeModal: () => void
  todo: TodoItems
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
      dispatch(removeTodo(todo.id))
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
          <UpdateSubjectButton onClick={onClickEditButton}>
            {todo.category === 'study' ? '과목수정' : '종목수정'}
          </UpdateSubjectButton>
          <DeleteSubjectButton onClick={onClickDeleteButton}>
            {todo.category === 'study' ? '과목삭제' : '종목삭제'}
          </DeleteSubjectButton>
        </ButtonWrapper>
        <ModalFooter>
          <ExitButton onClick={closeModal}>취소</ExitButton>
          <ConfirmButton onClick={onClickConfirmButton}>확인</ConfirmButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
      {isEditModalOpen && (
        <SubjectModal
          todo={todo}
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
          title={todo.category === 'study' ? '과목수정' : '종목수정'}
        ></SubjectModal>
      )}
    </ModalWrapper>
  )
}
export default EllipsisModal
