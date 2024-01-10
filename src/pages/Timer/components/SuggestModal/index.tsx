import { FC } from 'react'
import { LongGreenButton, LowerTypo, Root, UpperTypo } from './styled'
import { ModalExitButton, ModalFooter, ModalWrapper } from 'commonStyled'

type SuggestModalProps = {
  closeModal: () => void
}

export const SuggestModal: FC<SuggestModalProps> = ({ closeModal }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperTypo>건의 완료</UpperTypo>
        <LowerTypo>
          회원님의 소중한 의견이 전달되었어요.
          <p>빠르게 답변해드릴게요!</p>
        </LowerTypo>
        <ModalFooter>
          <LongGreenButton onClick={closeModal}>확인</LongGreenButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
    </ModalWrapper>
  )
}
