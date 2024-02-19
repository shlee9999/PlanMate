import { FC, useEffect } from 'react'
import * as s from './styled'
import { ModalWrapper } from 'commonStyled'
import { pageList } from 'constants/pageList'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { useLockBodyScroll, useModal } from 'hooks'
import { AnimatePresence } from 'framer-motion'

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
  const { isOpen: isHamburgerModalOpen, openModal: openHamburgerModal, closeModal: closeHamburgerModal } = useModal()
  const onClickUserInfoContainer = () => {
    navigate('/mypage')
    closeHamburgerModal()
  }
  const onClickMainNavItem = (url: string) => () => {
    navigate(url)
    closeHamburgerModal()
  }
  const onClickSubNavItem = (url: string) => () => {
    if (url === '/login') onClickLogout()
    else navigate(url)
    closeHamburgerModal()
  }
  useLockBodyScroll({ isOpen })
  useEffect(() => {
    if (isOpen) openHamburgerModal()
  }, [isOpen])
  if (!isOpen) return null
  return (
    <ModalWrapper onClick={closeHamburgerModal}>
      <AnimatePresence onExitComplete={() => closeModal()}>
        {isHamburgerModalOpen && (
          <s.HamburgerModal
            onClick={(e) => e.stopPropagation()}
            variants={s.HamburgerModalVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <s.CloseButton onClick={closeHamburgerModal} />
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
        )}
      </AnimatePresence>
    </ModalWrapper>
  )
}
