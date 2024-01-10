import { ChangeEvent, FC, useState } from 'react'

import { Container, NicknameInput, NicknameTypo, Root, Title } from './styled'
import { changeName } from 'api/member/changeName'
import { ModalWrapper, ModalFooter, WhiteButton, GreenButton, ModalExitButton } from 'commonStyled'

type ProfileEditModalProps = {
  closeModal: () => void
  nickname: string
  changeNickname: (newNickname: string) => void
}

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal, nickname, changeNickname }) => {
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onClickEditButton = () => {
    changeNickname(inputValue)
    //profileEdit api
  }
  const [inputValue, setInputValue] = useState<string>(nickname)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickEditButton()
    }
  }
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <Title>닉네임 수정</Title>
        <Container>
          <NicknameTypo>닉네임</NicknameTypo>
          <NicknameInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} />
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
