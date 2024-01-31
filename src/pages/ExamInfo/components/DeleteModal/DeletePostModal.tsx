import { FC } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'

type DeletePostModalProps = {
  closeModal: () => void
  deletePost: () => void
}

export const DeletePostModal: FC<DeletePostModalProps> = ({ closeModal, deletePost }) => {
  const onClickDeleteButton = (): void => deletePost()
  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <cs.ModalWrapper onClick={closeModal}>
      <s.DeletePostModal onClick={onClickModal}>
        <s.UpperTypo>글 삭제</s.UpperTypo>
        <s.CenterTypoWrapper>
          <s.CenterTypo>해당 게시글을</s.CenterTypo>
          <s.CenterTypo>삭제하시겠어요?</s.CenterTypo>
          <s.DescriptionTypo>삭제된 게시글은 복구할 수 없어요!</s.DescriptionTypo>
        </s.CenterTypoWrapper>
        <cs.ModalFooter>
          <cs.GreenButton onClick={onClickDeleteButton}>삭제</cs.GreenButton>
          <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
        </cs.ModalFooter>
        <cs.ModalExitButton onClick={closeModal} />
      </s.DeletePostModal>
    </cs.ModalWrapper>
  )
}
