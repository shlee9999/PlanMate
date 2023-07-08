import React from 'react'
import { useState } from 'react'
import { ButtonWrapper, DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { useDispatch } from 'react-redux'
import AddSubjectModal from 'components/Modals/SubjectModal'
import { TodoItems } from 'types'
import { ConfirmButton, ExitButton, ModalWrapper } from '../styled'
import { ModalExitButton, ModalFooter } from '../SubjectModal/styled'
import { removeTodo } from 'modules/todos'
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
  const closeModalAll = () => {
    closeModal()
    //하위 모달도 닫기
  }
  const handleClickDeleteButton = () => {
    setMode('delete')
  }
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const handleClickEditButton = () => {
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
      closeModalAll()
      return
    }
  }

  return (
    <ModalWrapper onClick={closeModalAll}>
      <Root onClick={handleModalClick}>
        <ButtonWrapper>
          <UpdateSubjectButton onClick={handleClickEditButton}>
            {todo.category === 'study' ? '과목수정' : '종목수정'}
          </UpdateSubjectButton>
          <DeleteSubjectButton onClick={handleClickDeleteButton}>
            {todo.category === 'study' ? '과목삭제' : '종목삭제'}
          </DeleteSubjectButton>
        </ButtonWrapper>
        <ModalFooter>
          <ExitButton onClick={closeModalAll}>취소</ExitButton>
          <ConfirmButton onClick={onClickConfirmButton}>확인</ConfirmButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModalAll} />
      </Root>
      {isEditModalOpen && (
        <AddSubjectModal
          todo={todo}
          isModalOpen={isEditModalOpen}
          closeModal={closeModal}
          title={todo.category === 'study' ? '과목수정' : '종목수정'}
        ></AddSubjectModal>
      )}
    </ModalWrapper>
  )
}
export default EllipsisModal
