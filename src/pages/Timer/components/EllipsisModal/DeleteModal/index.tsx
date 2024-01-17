import { FC } from 'react'
import { LowerDescriptionTypo, Root, TitleTypo, UpperDescriptionTypo } from './styled'
import { ModalFooter, GreenButton, WhiteButton, ModalExitButton } from 'commonStyled'

type DeleteModalProps = {
  title: string
  closeModal: () => void
  confirm: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({ title, closeModal, confirm }) => {
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
        <GreenButton onClick={confirm}>삭제</GreenButton>
        <WhiteButton onClick={closeModal}>취소</WhiteButton>
      </ModalFooter>
      <ModalExitButton onClick={closeModal} />
    </Root>
  )
}
