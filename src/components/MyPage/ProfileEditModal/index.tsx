import { FC } from 'react'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'
import { Root } from './styled'

type ProfileEditModalProps = {
  closeModal: () => void
}

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onClickEditButton = () => {
    //profileEdit api
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        프로필 수정
        <ModalFooter>
          <WhiteButton onClick={closeModal}>취소</WhiteButton>
          <GreenButton onClick={onClickEditButton}>수정</GreenButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
    </ModalWrapper>
  )
}
