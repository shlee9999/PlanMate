import { FC } from 'react'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'
import { Root } from './styled'

type ResignModalProps = {
  closeModal: () => void
}

export const ResignModal: FC<ResignModalProps> = ({ closeModal }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onClickResignButton = () => {
    //profileEdit api
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        탈퇴!
        <ModalFooter>
          <GreenButton onClick={onClickResignButton}>탈퇴</GreenButton>
          <WhiteButton onClick={closeModal}>수정</WhiteButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
    </ModalWrapper>
  )
}
