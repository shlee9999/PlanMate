import { FC } from 'react'
import * as s from './styled'
import { ModalWrapper } from 'commonStyled'
import { pageList } from 'constants/pageList'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type HamburgerModalProps = {
  isOpen: boolean
  closeModal: () => void
  onClickLogout: () => void
}
const SUB_NAV_ITEMS = [
  {
    title: '마이페이지',
    url: '/mypage',
  },
  {
    title: '공지사항',
    url: '/notice',
  },
  {
    title: '로그아웃',
    url: '/login',
  },
]
export const HamburgerModal: FC<HamburgerModalProps> = ({ isOpen, closeModal, onClickLogout }) => {
  const navigate = useNavigate()
  const username = useSelector((state: RootState) => state.userAuthInfo.nickname)
  const onClickUserInfoContainer = () => {
    navigate('/mypage')
    closeModal()
  }
  const onClickMainNavItem = (url: string) => () => {
    navigate(url)
    closeModal()
  }
  const onClickSubNavItem = (url: string) => () => {
    if (url === '/login') onClickLogout()
    else navigate(url)
    closeModal()
  }
  if (!isOpen) return null
  return (
    <ModalWrapper onClick={closeModal}>
      <s.HamburgerModal
        onClick={(e) => e.stopPropagation()}
        variants={s.HamburgerModalVar}
        initial="initial"
        animate="animate"
      >
        <s.CloseButton onClick={closeModal} />
        <s.UserInfoContainer onClick={onClickUserInfoContainer}>
          <s.UserName>{username}</s.UserName>
          <s.Email>planmate@gmail.com</s.Email>
        </s.UserInfoContainer>
        <s.MainNavContainer>
          {pageList.map((nav, index) => (
            <s.MainNavItem onClick={onClickMainNavItem(nav.url)} key={index}>
              {nav.title}
            </s.MainNavItem>
          ))}
        </s.MainNavContainer>
        <s.DividingLine />
        <s.SubNavContainer>
          {SUB_NAV_ITEMS.map((nav, index) => (
            <s.SubNavItem onClick={onClickSubNavItem(nav.url)} key={index}>
              {nav.title}
            </s.SubNavItem>
          ))}
        </s.SubNavContainer>
      </s.HamburgerModal>
    </ModalWrapper>
  )
}
