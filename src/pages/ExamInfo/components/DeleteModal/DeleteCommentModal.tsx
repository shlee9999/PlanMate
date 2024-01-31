import { FC } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'
import { AnimatePresence } from 'framer-motion'
import { useDeleteCommentModal } from './useDeleteCommentModal'
type DeleteCommentModalProps = {
  closeModal: () => void
  isOpen: boolean
  commentId: number
  postId: number
  type: 'comment' | 'reply'
  currentPage?: number
  parentCommentId?: number
}
/**댓글 삭제
 * @param {void} closeModal
 * @param {boolean} isOpen
 * @param {number} id
 * @param {number} postId
 * @param {number} currentPage 댓글 삭제 시 필요 (답글은 아직 미정)
 * @param {number} parentCommentId 답글 삭제면 부모 댓글 id 필요
 * @param {'comment' | 'reply'} type 댓글 삭제인지, 답글 삭제인지 구분
 */
export const DeleteCommentModal: FC<DeleteCommentModalProps> = ({
  closeModal,
  isOpen,
  commentId,
  postId,
  currentPage,
  parentCommentId,
  type,
}) => {
  const { onClickDeleteButton, onClickModal, onExitComplete } = useDeleteCommentModal({
    closeModal,
    commentId,
    postId,
    currentPage,
    parentCommentId,
    type,
  })
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
          <s.DeletePostModal onClick={onClickModal}>
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
          </s.DeletePostModal>
        </cs.ModalWrapper>
      )}
    </AnimatePresence>
  )
}
