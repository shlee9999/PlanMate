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
import { useDispatch, useSelector } from 'react-redux'
import logo from 'assets/images/logo.png'

import { tabList } from 'constants/tabList'
import { changeTab } from 'modules/tab'
import { RootState } from 'modules'

export const HeaderSection: FC = () => {
  const currentTab = useSelector((state: RootState) => state.tab.currentTab)
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)
  const dispatch = useDispatch()
  const onClickTabItem = (index: number) => (): void => {
    if (isRunning) return
    dispatch(changeTab(index))
  }
  return (
    <Root>
      <LeftContainer>
        <Logo src={logo} />
        <TabList>
          {tabList.map((item, index) =>
            index === currentTab ? (
              <SelectedTabItem key={index} onClick={onClickTabItem(index)}>
                {item.title}
              </SelectedTabItem>
            ) : (
              <TabItem key={index} onClick={onClickTabItem(index)}>
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
