import { FC } from 'react'
import { CenterTypo, CenterTypoWrapper, DescriptionTypo, Root, UpperTypo } from '../styled'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'
import { useNavigate } from 'react-router-dom'
import { removePost } from 'api/post/remove/removePost'

type DeletePostModalProps = {
  closeModal: () => void
  postId: number
}

export const DeletePostModal: FC<DeletePostModalProps> = ({ closeModal, postId }) => {
  const navigate = useNavigate()
  const onClickDeleteButton = () => {
    removePost({
      postId: postId,
    }).then((res) => {
      navigate(-1)
    })
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
