import { FC, useState } from 'react'
import { CenterTypo, CenterTypoWrapper, Root, UpperTypo } from '../styled'
import { ModalFooter, GreenButton, WhiteButton, ModalExitButton, ModalWrapperVar, ModalWrapper } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import useDeleteCommentMutation from 'pages/ExamInfo/hooks/useDeleteCommentMutation'
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
        <ModalWrapper onClick={closeModal} variants={ModalWrapperVar} initial="initial" animate="visible" exit="exit">
          <Root onClick={onClickModal}>
            <UpperTypo>댓글 삭제</UpperTypo>
            <CenterTypoWrapper>
              <CenterTypo>해당 댓글을</CenterTypo>
              <CenterTypo>삭제하시겠어요?</CenterTypo>
            </CenterTypoWrapper>
            <ModalFooter>
              <GreenButton onClick={onClickDeleteButton}>삭제</GreenButton>
              <WhiteButton onClick={closeModal}>취소</WhiteButton>
            </ModalFooter>
            <ModalExitButton onClick={closeModal} />
          </Root>
        </ModalWrapper>
      )}
    </AnimatePresence>
  )
}
