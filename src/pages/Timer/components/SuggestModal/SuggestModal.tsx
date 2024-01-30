import { FC } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'

type SuggestModalProps = {
  closeModal: () => void
}

export const SuggestModal: FC<SuggestModalProps> = ({ closeModal }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <s.SuggestModal onClick={onClickModal}>
      <s.UpperTypo>건의 완료</s.UpperTypo>
      <s.LowerTypo>
        회원님의 소중한 의견이 전달되었어요.
        <p>빠르게 답변해드릴게요!</p>
      </s.LowerTypo>
      <cs.ModalFooter>
        <s.LongGreenButton onClick={closeModal}>확인</s.LongGreenButton>
      </cs.ModalFooter>
      <cs.ModalExitButton onClick={closeModal} />
    </s.SuggestModal>
  )
}
