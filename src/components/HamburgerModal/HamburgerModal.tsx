import { FC } from 'react'
import * as s from './styled'
import { ModalWrapper } from 'commonStyled'
import { pageList } from 'constants/pageList'
import { useNavigate } from 'react-router-dom'

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
  if (!isOpen) return null
  return (
    <ModalWrapper onClick={closeModal}>
      <s.HamburgerModal>
        <s.UserInfoContainer onClick={() => navigate('/mypage')}>
          <s.UserName>메이트</s.UserName>
          {/* 커스텀 구글 아이콘 */}
          <s.Email>planmate@gmail.com</s.Email>
        </s.UserInfoContainer>
        <s.MainNavContainer>
          {pageList.map((page, index) => (
            <s.MainNavItem onClick={() => navigate(page.url)} key={index}>
              {page.title}
            </s.MainNavItem>
          ))}
        </s.MainNavContainer>
        <s.DividingLine />
        <s.SubNavContainer>
          {SUB_NAV_ITEMS.map((nav, index) => (
            <s.SubNavItem onClick={index !== 2 ? () => navigate(nav.url) : onClickLogout} key={index}>
              {nav.title}
            </s.SubNavItem>
          ))}
        </s.SubNavContainer>
      </s.HamburgerModal>
    </ModalWrapper>
  )
}
