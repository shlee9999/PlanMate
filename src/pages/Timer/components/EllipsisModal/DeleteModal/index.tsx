import { FC } from 'react'
import { LowerDescriptionTypo, Root, TitleTypo, UpperDescriptionTypo } from './styled'
import { ModalWrapper, ModalFooter, GreenButton, WhiteButton, ModalExitButton } from 'commonStyled'
import { duration } from 'moment'

type DeleteModalProps = {
  title: string
  closeModal: () => void
  deleteSubject: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({ title, closeModal, deleteSubject }) => {
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  return (
    <Root onClick={onClickModal} layoutId="ellipsis">
      <TitleTypo>일정삭제</TitleTypo>
      <UpperDescriptionTypo>
        {title}을(를)
        <br />
        삭제하시겠어요?
      </UpperDescriptionTypo>
      <LowerDescriptionTypo>
        기록은 삭제되지 않지만
        <br />
        일정은 함께 사라져요!
      </LowerDescriptionTypo>
      <ModalFooter>
        <GreenButton onClick={deleteSubject}>삭제</GreenButton>
        <WhiteButton onClick={closeModal}>취소</WhiteButton>
      </ModalFooter>
      <ModalExitButton onClick={closeModal} />
    </Root>
  )
}
