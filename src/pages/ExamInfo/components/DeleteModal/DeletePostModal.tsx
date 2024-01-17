import { FC } from 'react'
import { CenterTypo, CenterTypoWrapper, DescriptionTypo, Root, UpperTypo } from './styled'
import { ModalWrapper, ModalFooter, GreenButton, WhiteButton, ModalExitButton } from 'commonStyled'

type DeletePostModalProps = {
  closeModal: () => void
  deletePost: () => void
}

export const DeletePostModal: FC<DeletePostModalProps> = ({ closeModal, deletePost }) => {
  const onClickDeleteButton = (): void => {
    deletePost()
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperTypo>글 삭제</UpperTypo>
        <CenterTypoWrapper>
          <CenterTypo>해당 게시글을</CenterTypo>
          <CenterTypo>삭제하시겠어요?</CenterTypo>
          <DescriptionTypo>삭제된 게시글은 복구할 수 없어요!</DescriptionTypo>
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
