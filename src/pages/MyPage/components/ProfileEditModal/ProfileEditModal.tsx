import { FC, useEffect } from 'react'
import * as s from './styled'
import * as cs from 'commonStyled'
import { useDispatch } from 'react-redux'
import { changeUserAuthProp } from 'modules/userAuthInfo'
import { changeName } from 'api/member/changeName'
import { useForm } from 'hooks'
import { MAX_NICKNAME_CHARACTER_COUNT } from 'constants/maxCharacterCount'
import { AnimatePresence } from 'framer-motion'

type ProfileEditModalProps = {
  closeModal: () => void
  defaultNickname: string
  isOpen: boolean
}
type IForm = {
  nickname: string
}
export const ProfileEditModal: FC<ProfileEditModalProps> = ({ isOpen, closeModal, defaultNickname: nickname }) => {
  const dispatch = useDispatch()
  const onClickModal = (e: React.MouseEvent) => e.stopPropagation()
  const changeNickname = (newNickname: string) => {
    changeName({ name: newNickname }).then(() => {
      closeModal()
    })
  }
  const onSubmit = ({ nickname }: IForm) => {
    changeNickname(nickname)
    dispatch(changeUserAuthProp('nickname', nickname))
  }

  // const onKeyDown = (e: React.KeyboardEvent) => e.key === 'Enter' && handleSubmit(onSubmit)()
  const { registerInput, handleSubmit, setValue } = useForm()
  useEffect(() => {
    setValue('nickname', nickname)
  }, [])
  return (
    <AnimatePresence>
      {isOpen && (
        <cs.ModalWrapper
          onClick={closeModal}
          variants={cs.ModalWrapperVar}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <s.ProfileEditModal onClick={onClickModal} onSubmit={handleSubmit(onSubmit)}>
            <s.Title>닉네임 수정</s.Title>
            <s.Container>
              <s.NicknameTypo>닉네임</s.NicknameTypo>
              <s.NicknameInput
                {...registerInput('nickname', { maxLength: MAX_NICKNAME_CHARACTER_COUNT })}
                // onKeyDown={onKeyDown}
              />
            </s.Container>
            <cs.ModalFooter>
              <cs.GreenButton>수정</cs.GreenButton>
              <cs.WhiteButton onClick={closeModal}>취소</cs.WhiteButton>
            </cs.ModalFooter>
            <cs.ModalExitButton onClick={closeModal} />
          </s.ProfileEditModal>
        </cs.ModalWrapper>
      )}
    </AnimatePresence>
  )
}
