import { FC, useEffect, useState } from 'react'
import {
  ContentWrapper,
  GreenTypo,
  GreetTypo,
  LeftContainer,
  Logo,
  Logout,
  Notice,
  RightContainer,
  Root,
  SelectedPageItem,
  PageItem,
  PageList,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import logo from 'assets/images/logo.png'
import { pageList } from 'constants/pageList'
import { RootState } from 'modules'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTodo, initializeTodo } from 'modules/todos'
import { studyTime } from 'api/subject/studyTime'
import { TodoItems } from 'types'

export const HeaderSection: FC = () => {
  const location = useLocation()
  const initialTabIndex = pageList.findIndex((page) => location.pathname.includes(page.url))
  const todos = useSelector((state: RootState) => state.todos)
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickTabItem = (index: number) => (): void => {
    if (isRunning) return
    setCurrentTab(index)
    navigate(pageList[index].url)
  }

  useEffect(() => {
    const fetchStudyTime = async () => {
      const res = await studyTime()
      if (res) {
        const response = res as TodoItems[]
        // dispatch(initializeTodo(response)) //response 수정 필요
      }
    }

    fetchStudyTime()
  }, [dispatch])
  useEffect(() => {
    console.log(todos)
  }, [todos])
  useEffect(() => {
    if (location.pathname === '/') navigate('/timer')
  }, [location.pathname, navigate])

  return (
    <Root>
      <ContentWrapper>
        <LeftContainer>
          <Logo src={logo} />
          <PageList>
            {pageList.map((item, index) =>
              index === currentTab ? (
                <SelectedPageItem key={index} onClick={onClickTabItem(index)}>
                  {item.title}
                </SelectedPageItem>
              ) : (
                <PageItem key={index} onClick={onClickTabItem(index)}>
                  {item.title}
                </PageItem>
              )
            )}
          </PageList>
        </LeftContainer>
        <RightContainer>
          <GreetTypo>
            안녕하세요, <GreenTypo>메이트</GreenTypo>님!
            {/* 닉네임으로 변경 */}
          </GreetTypo>
          <Logout>로그아웃</Logout>
          <Notice>공지사항</Notice>
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
