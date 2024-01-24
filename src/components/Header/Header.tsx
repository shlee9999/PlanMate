import { FC, useEffect, useState } from 'react'
import {
  ContentWrapper,
  Username,
  GreetTypo,
  NavItemContainer,
  Notice,
  RightContainer,
  Root,
  NavItem,
  NavItems,
  LogoutTypo,
  YellowCircle,
  NavItemVar,
  StyledLogo,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { pageList } from 'constants/pageList'
import { RootState } from 'modules'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'api/login/logout'
import { StudyTimeResponseProps, studyTime } from 'api/subject/studyTime'
import { TodoItemType } from 'types'
import { GoogleTokenResponseProps, googleToken } from 'api/login/googleToken'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { CheckUserInfoResponseProps, checkUserInfo } from 'api/member/checkUserInfo'

export const Header: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const initialTabIndex = pageList.findIndex((page) => currentPath.includes(page.url))
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  const isRunning = useSelector((state: RootState) => state.timer.isRunning)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickTabItem = (index: number) => (): void => {
    !isRunning && setCurrentTab(index)
    userAuthInfo.name && navigate(pageList[index].url)
  }

  const onClickNickname = () => !isRunning && navigate('/mypage')
  const onClickLogin = () => !isRunning && navigate('/login')
  const onClickNotice = () => !isRunning && navigate('/notice')
  const onClickLogout = () =>
    !isRunning &&
    logout().then((res) => {
      navigate('/timer')
      localStorage.removeItem('userAuthInfo')
      window.location.reload()
    })

  useEffect(() => {
    if (location.pathname === '/') navigate('/timer')
  }, [currentTab])

  useEffect(() => {
    // const currentUrl = window.location.href
    // const fetchStudyTime = async () => {
    //   const res = await studyTime()
    //   if (res) {
    //     const response = res as StudyTimeResponseProps
    //     const newTodoItems: Array<TodoItemType> = response.map((todo) => ({
    //       subjectId: todo.subjectId,
    //       colorHex: todo.colorHex,
    //       name: todo.name,
    //       time: timeToSecond({
    //         hour: todo.studyTimeHours,
    //         minute: todo.studyTimeMinutes,
    //         second: todo.studyTimeSeconds,
    //       }),
    //     }))
    //     dispatch(initializeTodo(newTodoItems)) //response 수정 필요
    //   }
    // }
    // fetchStudyTime()
    // const split = currentUrl.split('id')
    // if (split.length >= 2) {
    //   const userId = +split[1].replace('=', '')
    //   const getUserAuth = async () => {
    //     const res = await googleToken({ id: userId })
    //     if (res) {
    //       const response = res as GoogleTokenResponseProps
    //       localStorage.setItem('userAuthInfo', JSON.stringify(response)) //최초 저장
    //       dispatch(changeuserAuthInfo(response))
    //       navigate('/')
    //       window.location.reload()
    //     }
    //   }
    //   getUserAuth()
    // }

    // 로그인 구현 전 임시 userInfo초기화 코드입니다.
    checkUserInfo().then((res) => {
      const response = res as CheckUserInfoResponseProps
      // localStorage.setItem('userAuthInfo', JSON.stringify(res as CheckUserInfoResponseProps)) //최초 저장
      dispatch(
        changeuserAuthInfo({
          accessToken: process.env.REACT_APP_ACCESS_TOKEN,
          email: response.email,
          id: response.memberId,
          img: response.profile,
          name: response.memberName,
        })
      )
    })
  }, [])

  useEffect(() => {
    setCurrentTab(pageList.findIndex((page) => location.pathname.includes(page.url)))
    setCurrentPath(location.pathname)
  }, [location, currentTab])

  useEffect(() => {
    // if (!userAuthInfo.name) navigate('../login')
  }, [userAuthInfo])
  return (
    <Root>
      <ContentWrapper>
        <NavItemContainer>
          <StyledLogo />
          <NavItems>
            {pageList.map((item, index) => (
              <NavItem
                key={index}
                onClick={onClickTabItem(index)}
                $isSelected={index === currentTab}
                variants={NavItemVar}
                initial="initial"
                whileHover="hover"
              >
                {item.title}
                {index === currentTab && <YellowCircle layoutId="yellow_circle" transition={{ duration: 0.2 }} />}
              </NavItem>
            ))}
          </NavItems>
        </NavItemContainer>
        <RightContainer>
          {userAuthInfo.name && (
            <GreetTypo>
              안녕하세요,{' '}
              <Username onClick={onClickNickname}>
                {userAuthInfo.name}
                {currentPath.includes('/mypage') && <YellowCircle layoutId="yellow_circle" />}
              </Username>
              님!
            </GreetTypo>
          )}
          {userAuthInfo.name && <LogoutTypo onClick={onClickLogout}>로그아웃</LogoutTypo>}
          {userAuthInfo.name && <Notice onClick={onClickNotice}>공지사항</Notice>}
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
