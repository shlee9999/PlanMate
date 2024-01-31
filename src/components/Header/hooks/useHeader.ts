import { logout } from 'api/login/logout'
import { checkUserInfo, CheckUserInfoResponseProps } from 'api/member/checkUserInfo'
import { pageList } from 'constants/pageList'
import { RootState } from 'modules'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

export const useHeader = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const initialTabIndex = pageList.findIndex((page) => currentPath.includes(page.url))
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  // const isRunning = useSelector((state: RootState) => state.timer.isRunning)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClickTabItem = (index: number) => (): void => {
    if (isNavBlocked) return
    setCurrentTab(index) //* totalTimer Running 차단
    userAuthInfo.name && navigate(pageList[index].url)
  }
  const onClickNickname = () => !isNavBlocked && navigate('/mypage')
  const onClickLogin = () => !isNavBlocked && navigate('/login')
  const onClickNotice = () => !isNavBlocked && navigate('/notice')
  const onClickLogout = () =>
    !isNavBlocked &&
    logout().then((res) => {
      navigate('/timer')
      localStorage.removeItem('userAuthInfo')
      window.location.reload()
    })

  useEffect(() => {
    if (location.pathname === '/') navigate('/timer')
  }, [currentTab])

  useEffect(() => {
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

  //   useEffect(() => {
  // if (!userAuthInfo.name) navigate('../login')
  //   }, [userAuthInfo])
  //   useEffect(() => {
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

  return {
    userAuthInfo,
    currentPath,
    currentTab,
    onClickTabItem,
    onClickNickname,
    onClickLogin,
    onClickNotice,
    onClickLogout,
  }
}
