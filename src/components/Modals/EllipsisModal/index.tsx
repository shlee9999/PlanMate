import React from 'react'
import { useState } from 'react'
import { DeleteSubjectButton, Root, UpdateSubjectButton } from './styled'
import { useDispatch } from 'react-redux'
import AddSubjectModal from 'components/Modals/Modal'
import { TodoItems } from 'types'
const EllipsisModal = ({
  closeModal,
  todo,
  isTodoTimerRunning,
}: {
  closeModal: () => void
  todo: TodoItems
  isTodoTimerRunning: boolean
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const dispatch = useDispatch()
  const closeModalAll = () => {
    closeModal()
    //하위 모달도 닫기
  }
  const handleClickDeleteButton = () => {
    if (isTodoTimerRunning) return //타이머 가고 있을 때 삭제 불가
    dispatch({ type: 'DEL_TODO', id: todo.id })
    closeModalAll()
  }
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const handleClickEditButton = () => {
    setIsEditModalOpen(true)
  }

  return (
    <Root onClick={closeModalAll}>
      <Root onClick={handleModalClick}>
        <UpdateSubjectButton onClick={handleClickEditButton}>
          {todo.category === 'study' ? '과목 수정' : '종목 수정'}
        </UpdateSubjectButton>
        <DeleteSubjectButton onClick={handleClickDeleteButton}>
          {todo.category === 'study' ? '과목 삭제' : '종목 삭제'}
        </DeleteSubjectButton>
      </Root>
      {isEditModalOpen && (
        <AddSubjectModal
          todo={todo}
          isModalOpen={isEditModalOpen}
          closeModal={closeModal}
          title={todo.category === 'study' ? '과목 수정' : '종목 수정'}
        ></AddSubjectModal>
      )}
    </Root>
  )
}
export default EllipsisModal
