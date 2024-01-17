import { FC } from 'react'
import { DescriptionTypo, Root, Title } from './styled'
import { signout } from 'api/member/signout'
import { useNavigate } from 'react-router-dom'
import { ModalWrapper, ModalFooter, GreenButton, WhiteButton, ModalExitButton } from 'commonStyled'

type ResignModalProps = {
  closeModal: () => void
}

export const ResignModal: FC<ResignModalProps> = ({ closeModal }) => {
  const navigate = useNavigate()
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onClickResignButton = () => {
    signout().then(() => {
      navigate('/timer')
      localStorage.removeItem('userAuthInfo')
      window.location.reload()
    })
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <Title>탈퇴하기</Title>
        <DescriptionTypo>탈퇴 후 30일 간 해당 계정으로</DescriptionTypo>
        <DescriptionTypo>재가입이 불가능해요!</DescriptionTypo>
        <DescriptionTypo>계속 진행하시겠어요?</DescriptionTypo>
        <ModalFooter>
          <GreenButton onClick={onClickResignButton}>탈퇴</GreenButton>
          <WhiteButton onClick={closeModal}>수정</WhiteButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
    </ModalWrapper>
  )
}
