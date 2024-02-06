import { logout } from 'api/login/logout'
import { pageList } from 'constants/pageList'
import { RootState } from 'modules'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

export const useHeader = () => {
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
      navigate('/timer')
      localStorage.removeItem('userAuthInfo')
      window.location.reload()
    })

  useEffect(() => {
    if (location.pathname === '/') navigate('/timer')
  }, [currentTab])

  useEffect(() => {
    setCurrentTab(pageList.findIndex((page) => location.pathname.includes(page.url)))
    setCurrentPath(location.pathname)
  }, [location, currentTab])

  useEffect(() => {
    if (!userAuthInfo.nickname) navigate('/login')
  }, [userAuthInfo])

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
