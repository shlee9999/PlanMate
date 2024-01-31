import * as s from './styled'
import * as cs from 'commonStyled'
import { FC } from 'react'
import { signout } from 'api/member/signout'
import { useNavigate } from 'react-router-dom'

type ResignModalProps = {
  closeModal: () => void
}

export const ResignModal: FC<ResignModalProps> = ({ closeModal }) => {
  const navigate = useNavigate()
  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()
  const onClickResignButton = () =>
    signout().then(() => {
      navigate('/timer')
      localStorage.removeItem('userAuthInfo')
      window.location.reload()
    })

  return (
    <cs.ModalWrapper onClick={closeModal}>
      <s.ResignModal onClick={onClickModal}>
        <s.Title>탈퇴하기</s.Title>
        <s.DescriptionTypo>탈퇴 후 30일 간 해당 계정으로</s.DescriptionTypo>
        <s.DescriptionTypo>재가입이 불가능해요!</s.DescriptionTypo>
        <s.DescriptionTypo>계속 진행하시겠어요?</s.DescriptionTypo>
        <cs.ModalFooter>
          <cs.GreenButton onClick={onClickResignButton}>탈퇴</cs.GreenButton>
          <cs.WhiteButton onClick={closeModal}>수정</cs.WhiteButton>
        </cs.ModalFooter>
        <cs.ModalExitButton onClick={closeModal} />
      </s.ResignModal>
    </cs.ModalWrapper>
  )
}
