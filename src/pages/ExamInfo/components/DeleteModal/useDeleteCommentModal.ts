import { useDeleteCommentMutation } from 'pages/ExamInfo/hooks/mutations'
import useDeleteReplyMutation from 'pages/ExamInfo/hooks/mutations/comment/useDeleteReplyMutation'
import { useState } from 'react'

type useDeleteCommentModalProps = {
  closeModal: () => void
  commentId: number
  postId: number
  type: 'comment' | 'reply'
  currentPage?: number
  parentCommentId?: number
}

export const useDeleteCommentModal = ({
  closeModal,
  commentId,
  postId,
  currentPage,
  parentCommentId,
  type,
}: useDeleteCommentModalProps) => {
  const mutateDeleteComment = useDeleteCommentMutation()
  const mutateDeleteReply = useDeleteReplyMutation()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const onClickDeleteButton = () => {
    setIsConfirmed(true)
    closeModal()
  }

  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()
  const onExitComplete = () => {
    if (!isConfirmed) return
    type === 'comment' &&
      mutateDeleteComment({
        commentId,
        postId,
        currentPage,
        callBack: closeModal,
      })
    type === 'reply' && mutateDeleteReply({ commentId, parentCommentId, callBack: closeModal })
    setIsConfirmed(false)
  }
  return { onClickDeleteButton, onClickModal, onExitComplete }
}
