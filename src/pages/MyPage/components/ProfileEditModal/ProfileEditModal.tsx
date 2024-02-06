import { ChangeEvent, FC, useState } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'
import { useDispatch } from 'react-redux'
import { changeUserAuthProp } from 'modules/userAuthInfo'
import { changeName } from 'api/member/changeName'

type ProfileEditModalProps = {
  closeModal: () => void
  nickname: string
}

export const ProfileEditModal: FC<ProfileEditModalProps> = ({ closeModal, nickname }) => {
  const dispatch = useDispatch()
  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()
  const changeNickname = (newNickname: string) => {
    changeName({ name: newNickname }).then((res) => {
      closeModal()
    })
  }
  const onClickEditButton = () => {
    changeNickname(inputValue)
    dispatch(changeUserAuthProp('nickname', inputValue))
  }
  const [inputValue, setInputValue] = useState<string>(nickname)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onKeyDown = (e: React.KeyboardEvent) => e.key === 'Enter' && onClickEditButton()

  return (
    <cs.ModalWrapper onClick={closeModal}>
      <s.ProfileEditModal onClick={onClickModal}>
        <s.Title>닉네임 수정</s.Title>
        <s.Container>
          <s.NicknameTypo>닉네임</s.NicknameTypo>
          <s.NicknameInput onChange={onChange} value={inputValue} onKeyDown={onKeyDown} />
        </s.Container>
        <cs.ModalFooter>
          <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
          <cs.GreenButton onClick={onClickEditButton}>수정</cs.GreenButton>
        </cs.ModalFooter>
        <cs.ModalExitButton onClick={closeModal} />
      </s.ProfileEditModal>
    </cs.ModalWrapper>
  )
}
