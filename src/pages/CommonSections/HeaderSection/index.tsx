import { FC, useEffect, useState } from 'react'
import {
  ContentWrapper,
  GreenTypo,
  GreetTypo,
  LeftContainer,
  Logo,
  LoginTypo,
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
import { initializeTodo } from 'modules/todos'
import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { TodoItemType } from 'types'
import { timeToSecond } from 'utils/helper'
import { GoogleTokenResponseProps, googleToken } from 'api/login/googleToken'

export const HeaderSection: FC = () => {
  const [userAuthInfo, setUserAuthInfo] = useState(JSON.parse(localStorage.getItem('userAuthInfo') || '{}'))
  const location = useLocation()
  const initialTabIndex = pageList.findIndex((page) => location.pathname.includes(page.url))
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickTabItem = (index: number) => (): void => {
    if (isRunning) return
    setCurrentTab(index)
    navigate(pageList[index].url)
  }

  const onClickNickname = () => {
    navigate('mypage')
  }
  const onClickLogin = () => {
    navigate('login')
  }
  useEffect(() => {
    const fetchStudyTime = async () => {
      const res = await studyTime()
      if (res) {
        const response = res as StudyTimeResponseProps
        const newTodoItems: Array<TodoItemType> = response.map((todo) => ({
          subjectId: todo.subjectId,
          colorHex: todo.colorHex,
          name: todo.name,
          time: timeToSecond(todo.studyTimeHours, todo.studyTimeMinutes, todo.studyTimeSeconds),
        }))
        dispatch(initializeTodo(newTodoItems)) //response 수정 필요
      }
    }
    fetchStudyTime()
    try {
      const currentUrl = window.location.href
      googleToken({ id: +currentUrl.split('id')[1].replace('=', '') }).then((res) => {
        const response = res as GoogleTokenResponseProps
        localStorage.setItem('userAuthInfo', JSON.stringify(response))
        console.log(JSON.parse(localStorage.getItem('userAuthInfo')))
      })
    } catch (error) {
      console.log('')
    }
  }, [dispatch])

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
          {userAuthInfo.name && (
            <GreetTypo>
              안녕하세요, <GreenTypo onClick={onClickNickname}>{userAuthInfo.name}</GreenTypo>님!
              {/* 닉네임으로 변경 */}
            </GreetTypo>
          )}
          {userAuthInfo.name ? <LoginTypo>로그아웃</LoginTypo> : <LoginTypo onClick={onClickLogin}>로그인</LoginTypo>}
          <Notice>공지사항</Notice>
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
