import { FC } from 'react'
import * as cs from 'commonStyled'
import * as s from './styled'

type DeleteModalProps = {
  title: string
  closeModal: () => void
  deleteConfirm: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({ title, closeModal, deleteConfirm: confirm }) => {
  const onClickModal = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()

  return (
    <s.Root onClick={onClickModal} layoutId="ellipsis">
      <s.TitleTypo>일정삭제</s.TitleTypo>
      <s.UpperDescriptionTypo>
        {title}을(를)
        <br />
        삭제하시겠어요?
      </s.UpperDescriptionTypo>
      <s.LowerDescriptionTypo>
        기록은 삭제되지 않지만
        <br />
        일정은 함께 사라져요!
      </s.LowerDescriptionTypo>
      <cs.ModalFooter>
        <cs.GreenButton onClick={confirm}>삭제</cs.GreenButton>
        <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
      </cs.ModalFooter>
      <cs.ModalExitButton onClick={closeModal} />
    </s.Root>
  )
}
