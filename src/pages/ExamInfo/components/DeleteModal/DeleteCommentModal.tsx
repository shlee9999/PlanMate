import { FC, useState } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useDeleteCommentMutation from 'pages/ExamInfo/hooks/mutations/useDeleteCommentMutation'
type DeleteCommentModalProps = {
  closeModal: () => void
  isOpen: boolean
  id: number
  postId: number
  currentPage: number
}

export const DeleteCommentModal: FC<DeleteCommentModalProps> = ({ closeModal, isOpen, id, postId, currentPage }) => {
  const mutateDeleteComment = useDeleteCommentMutation()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const onClickDeleteButton = () => {
    setIsConfirmed(true)
    closeModal()
  }
  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()
  const onExitComplete = () => {
    if (!isConfirmed) return
    mutateDeleteComment({
      commentId: id,
      postId,
      currentPage,
      callBack: closeModal,
    })
    setIsConfirmed(false)
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
          <s.Root onClick={onClickModal}>
            <s.UpperTypo>댓글 삭제</s.UpperTypo>
            <s.CenterTypoWrapper>
              <s.CenterTypo>해당 댓글을</s.CenterTypo>
              <s.CenterTypo>삭제하시겠어요?</s.CenterTypo>
            </s.CenterTypoWrapper>
            <cs.ModalFooter>
              <cs.GreenButton onClick={onClickDeleteButton}>삭제</cs.GreenButton>
              <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
            </cs.ModalFooter>
            <cs.ModalExitButton onClick={closeModal} />
          </s.Root>
        </cs.ModalWrapper>
      )}
    </AnimatePresence>
  )
}
