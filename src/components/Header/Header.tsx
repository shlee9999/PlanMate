import * as s from './styled'
import { FC } from 'react'
import { pageList } from 'constants/pageList'
import { Display } from 'components/Display/Display'
import { DISPLAY } from 'types'
import { useHeader } from './hooks/useHeader'
import { VerticalEllipsis } from 'commonStyled'
import { useModal } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { MOBILET_HEADER_NAV } from 'constants/footerNavigate'

export const Header: FC = () => {
  const navigate = useNavigate()
  const { userAuthInfo, currentPath, currentTab, onClickTabItem, onClickNickname, onClickNotice, onClickLogout } =
    useHeader()
  const { isOpen, openModal, closeModal } = useModal()
  const renderNavContainer = (type: 'header' | 'footer') => (
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
              <s.YellowCircle layoutId={`${type}_yellow_circle`} transition={{ duration: 0.2 }} />
            )}
          </s.NavItem>
        ))}
      </s.NavItems>
    </s.NavItemContainer>
  )
  return (
    <>
      <s.HeaderWrapper>
        <s.Header>
          <s.StyledLogo />
          {renderNavContainer('header')}
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
            <Display on="SMALL">
              <VerticalEllipsis onClick={openModal} />
              <s.StyledSmallEllipsisModal
                buttonTextAlign="center"
                itemList={MOBILET_HEADER_NAV.map((nav) => ({
                  name: nav.typo,
                  onClick: () => {
                    navigate(nav.url)
                    closeModal()
                  },
                }))}
                isOpen={isOpen}
                closeModal={closeModal}
              />
            </Display>
          </s.RightContainer>
        </s.Header>
      </s.HeaderWrapper>
      <Display on={DISPLAY.SMALL}>
        <s.MobileFooter>{renderNavContainer('footer')}</s.MobileFooter>
      </Display>
    </>
  )
}
