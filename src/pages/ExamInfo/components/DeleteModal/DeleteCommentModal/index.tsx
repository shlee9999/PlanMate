import { FC } from 'react'
import { CenterTypo, CenterTypoWrapper, Root, UpperTypo } from '../styled'
import { ModalFooter, GreenButton, WhiteButton, ModalExitButton, ModalWrapperVar, ModalWrapper } from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
type DeleteCommentModalProps = {
  closeModal: () => void
  deleteComment: () => void
  isOpen: boolean
}

export const DeleteCommentModal: FC<DeleteCommentModalProps> = ({ closeModal, deleteComment, isOpen }) => {
  const onClickDeleteButton = () => {
    deleteComment()
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <AnimatePresence>
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
          </Root>{' '}
        </ModalWrapper>
      )}
    </AnimatePresence>
  )
}
