import { FC } from 'react'
import { GreenTypo, GreetTypo, LeftContainer, Logo, Logout, Notice, RightContainer, Root, Tab } from './styled'
import { tabList } from 'utils/helper'
import { useDispatch } from 'react-redux'
import logo from 'assets/images/logo.png'

type HeaderSectionProps = {}

export const HeaderSection: FC<HeaderSectionProps> = () => {
  const dispatch = useDispatch()
  return (
    <Root>
      <LeftContainer>
        <Logo src={logo} />
        <Tab>
          {tabList.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch({ type: 'CHANGE_TAB', value: index })
              }}
            >
              {item.title}
            </div>
          ))}
        </Tab>
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
