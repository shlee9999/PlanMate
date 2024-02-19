import * as s from './styled'
import { FC } from 'react'
import { useHeader } from './hooks/useHeader'
import { useModal } from 'hooks'
import { HamburgerModal } from 'components'
import { pageList } from 'constants/pageList'

export const Header: FC = () => {
  const { userAuthInfo, currentPath, currentTab, onClickTabItem, onClickNickname, onClickNotice, onClickLogout } =
    useHeader()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <s.HeaderWrapper>
        <s.Header>
          <s.StyledLogo />
          <s.NavItemContainer>
            <s.NavItems>
              {pageList.map((item, index) => (
                <s.NavItem
                  key={index}
                  onClick={onClickTabItem(index)}
                  $isSelected={index === currentTab}
                  variants={s.NavItemVar}
                  initial="initial"
                  whileHover="hover"
                >
                  {item.title}
                  {index === currentTab && (
                    <s.YellowCircle layoutId={`header_yellow_circle`} transition={{ duration: 0.2 }} />
                  )}
                </s.NavItem>
              ))}
            </s.NavItems>
          </s.NavItemContainer>
          <s.RightContainer>
            {userAuthInfo.nickname && (
              <s.GreetTypoContainer>
                안녕하세요,{' '}
                <s.Username onClick={onClickNickname}>
                  {userAuthInfo.nickname}
                  {currentPath.includes('/mypage') && <s.YellowCircle layoutId="header_yellow_circle" />}
                </s.Username>
                님!
              </s.GreetTypoContainer>
            )}
            {userAuthInfo.nickname && <s.LogoutTypo onClick={onClickLogout}>로그아웃</s.LogoutTypo>}
            {userAuthInfo.nickname && <s.Notice onClick={onClickNotice}>공지사항</s.Notice>}
            <s.StyledHamburgerIcon onClick={openModal} />
          </s.RightContainer>
          <HamburgerModal isOpen={isOpen} closeModal={closeModal} onClickLogout={onClickLogout} />
        </s.Header>
      </s.HeaderWrapper>
    </>
  )
}
