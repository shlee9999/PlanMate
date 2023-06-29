import { FC } from 'react'
import {
  GreenTypo,
  GreetTypo,
  LeftContainer,
  Logo,
  Logout,
  Notice,
  RightContainer,
  Root,
  SelectedTabItem,
  TabItem,
  TabList,
} from './styled'
import { tabList } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import logo from 'assets/images/logo.png'
import { Globals } from 'types'

type HeaderSectionProps = {}

export const HeaderSection: FC<HeaderSectionProps> = () => {
  const currentTab = useSelector((state: Globals) => state.currentTab)
  const dispatch = useDispatch()
  return (
    <Root>
      <LeftContainer>
        <Logo src={logo} />
        <TabList>
          {tabList.map((item, index) =>
            index === currentTab ? (
              <SelectedTabItem
                key={index}
                onClick={() => {
                  dispatch({ type: 'CHANGE_TAB', value: index })
                }}
              >
                {item.title}
              </SelectedTabItem>
            ) : (
              <TabItem
                key={index}
                onClick={() => {
                  dispatch({ type: 'CHANGE_TAB', value: index })
                }}
              >
                {item.title}
              </TabItem>
            )
          )}
        </TabList>
      </LeftContainer>
      <RightContainer>
        <GreetTypo>
          안녕하세요, <GreenTypo>메이트</GreenTypo>님!
          {/* 닉네임으로 변경 */}
        </GreetTypo>
        <Logout>로그아웃</Logout>
        <Notice>공지사항</Notice>
      </RightContainer>
    </Root>
  )
}
