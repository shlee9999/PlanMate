import { FC } from 'react'
import { CenterTypo, CenterTypoWrapper, Root, UpperTypo } from '../styled'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'

type DeleteCommentModalProps = {
  closeModal: () => void
  deleteComment: () => void
}

export const DeleteCommentModal: FC<DeleteCommentModalProps> = ({ closeModal, deleteComment }) => {
  const onClickDeleteButton = () => {
    deleteComment()
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <ModalWrapper onClick={closeModal}>
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
  )
}
