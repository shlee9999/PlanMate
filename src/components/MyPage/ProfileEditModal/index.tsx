import { ChangeEvent, FC, useState } from 'react'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'
import { Container, NicknameInput, NicknameTypo, Root, Title } from './styled'

type ProfileEditModalProps = {
  closeModal: () => void
  nickname: string
}

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal, nickname }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onClickEditButton = () => {
    //profileEdit api
  }
  const [inputValue, setInputValue] = useState<string>(nickname)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <Title>닉네임 수정</Title>
        <Container>
          <NicknameTypo>닉네임</NicknameTypo>
          <NicknameInput onChange={onChange} value={inputValue} />
        </Container>
        <ModalFooter>
          <WhiteButton onClick={closeModal}>취소</WhiteButton>
          <GreenButton onClick={onClickEditButton}>수정</GreenButton>
        </ModalFooter>
        <ModalExitButton onClick={closeModal} />
      </Root>
    </ModalWrapper>
  )
}
