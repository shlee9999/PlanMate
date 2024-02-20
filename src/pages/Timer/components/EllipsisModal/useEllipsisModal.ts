import { useLockBodyScroll } from 'hooks'
import { useDeleteSubjectMutation } from 'pages/Timer/hooks/mutations'
import { useState } from 'react'
import { TodoItemType } from 'types'

type useEllipsisModalProps = {
  closeModal: () => void
  todo: TodoItemType
  isOpen: boolean
}

export const useEllipsisModal = ({ closeModal, todo, isOpen }: useEllipsisModalProps) => {
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
    closeEditModal()
    closeDeleteModal()
    console.log('ExitComplete!')
    if (isDeleteConfirmed) {
      // confirm버튼 눌렀을 때만 작동하도록
      mutateDeleteSubject({ subjectId: todo.subjectId })
      setIsDeleteConfirmed(false)
    }
  }

  useLockBodyScroll({ isOpen })
  return {
    onClickDeleteButton,
    onClickModal,
    onClickEditButton,
    deleteConfirm,
    onExitComplete,
    isDeleteModalOpen,
    isEditModalOpen,
    closeDeleteModal,
    closeEditModal,
  }
}
