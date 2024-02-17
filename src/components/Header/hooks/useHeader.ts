import { logout } from 'api/login/logout'
import { pageList } from 'constants/pageList'
import { RootState } from 'modules'
import { changeUserAuthInfo } from 'modules/userAuthInfo'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

export const useHeader = () => {
  const dispatch = useDispatch()
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const initialTabIndex = pageList.findIndex((page) => currentPath.includes(page.url))
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  const onClickTabItem = (index: number) => (): void => {
    if (isNavBlocked) return
    setCurrentTab(index) //* totalTimer Running 차단
    userAuthInfo.nickname && navigate(pageList[index].url)
  }
  const onClickNickname = () => !isNavBlocked && navigate('/mypage')
  const onClickNotice = () => !isNavBlocked && navigate('/notice')
  const onClickLogout = () =>
    !isNavBlocked &&
    logout().then(() => {
      navigate('/login')
      localStorage.removeItem('userAuthInfo')
      dispatch(
        changeUserAuthInfo({
          memberId: null,
          nickname: null,
          profileImage: null,
          email: null,
          accessToken: null,
          refreshToken: null,
        })
      )
    })
  useEffect(() => {
    if (location.pathname === '/') {
      if (!userAuthInfo.nickname) navigate('/login')
      else navigate('/timer')
    }
  }, [userAuthInfo, currentTab])

  useEffect(() => {
    setCurrentTab(pageList.findIndex((page) => location.pathname.includes(page.url)))
    setCurrentPath(location.pathname)
  }, [location, currentTab])

  return {
    userAuthInfo,
    currentPath,
    currentTab,
    onClickTabItem,
    onClickNickname,
    onClickNotice,
    onClickLogout,
  }
}
