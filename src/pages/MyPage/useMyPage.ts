import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { changeName } from 'api/member/changeName'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import { FindScrappedPostResponseProps, findScrappedPost } from 'api/post/find/findScrappedPost'
import { ResponsePostType, ResponseCommentType } from 'api/types'
import { Comment, PostItem } from 'components'
import { RootState } from 'modules'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { FC, useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'

type TabInfoListProps = {
  title: string
  Component: FC
  list: ResponsePostType[] | ResponseCommentType[]
  isLoading: boolean
  icon: string
  totalPages: number
}

export const useMyPage = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [isEllipsisModalOpen, setIsEllipsisModalOpen] = useState(false)
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState(false)
  const [isResignModalOpen, setIsResignModalOpen] = useState(false)
  const { data: dDayList, isLoading: isDdayLoading } = useQuery<FindAllDdayResponseProps>([QueryKeys.dDayList], () =>
    findAllDday()
  )
  const { data: myPostInfo, isLoading: isPostLoading } = useQuery<FindPostResponseProps>(
    [QueryKeys.myPostInfo, currentPage],
    () => findPost({ pages: currentPage - 1 }),
    { keepPreviousData: true }
  )
  const { data: myScrapInfo, isLoading: isScrapLoading } = useQuery<FindScrappedPostResponseProps>(
    [QueryKeys.myScrapInfo, currentPage],
    () => findScrappedPost({ pages: currentPage - 1 }),
    { keepPreviousData: true }
  )
  const { data: myCommentInfo, isLoading: isCommentLoading } = useQuery<FindCommentResponseProps>(
    [QueryKeys.myCommentInfo, currentPage],
    () => findComment({ pages: currentPage - 1 }),
    { keepPreviousData: true }
  )
  const myPostList = myPostInfo?.postDtoList || []
  const postTotalPages = myPostInfo?.totalPages || 0
  const myCommentList = myCommentInfo?.commentDtoList || []
  const commentTotalPages = myCommentInfo?.totalPages || 0
  const myScrapList = myScrapInfo?.postDtoList || []
  const scrapTotalPages = myScrapInfo?.totalPages || 0
  const tabInfoList: TabInfoListProps[] = [
    {
      title: '작성한 글',
      Component: PostItem,
      list: myPostList,
      isLoading: isPostLoading,
      icon: 'pencil',
      totalPages: postTotalPages,
    },
    {
      title: '작성한 댓글',
      Component: Comment,
      list: myCommentList,
      isLoading: isCommentLoading,
      icon: 'chat',
      totalPages: commentTotalPages,
    },
    {
      title: '스크랩한 글',
      Component: PostItem,
      list: myScrapList,
      isLoading: isScrapLoading,
      icon: 'pencil',
      totalPages: scrapTotalPages,
    },
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onClickViewMore = () => navigate('/mypage/dday')
  const closeProfileEditModal = () => setIsProfileEditModalOpen(false)
  const closeResignModal = () => setIsResignModalOpen(false)
  const onClickRoot = () => setIsEllipsisModalOpen(false)
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()
  const openProfileEditModal = () => {
    setIsProfileEditModalOpen(true)
    setIsEllipsisModalOpen(false)
  }
  const openResignModal = () => {
    setIsResignModalOpen(true)
    setIsEllipsisModalOpen(false)
  }
  const onClickEllipsisButton = (e: React.MouseEvent): void => {
    setIsEllipsisModalOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickTabItem = (tabIndex: number) => () => {
    setCurrentPage(1)
    setCurrentTabIndex(tabIndex)
  }

  const { title, Component, list, isLoading, totalPages } = tabInfoList[currentTabIndex]
  const changeNickname = (newNickname: string) => {
    changeName({ name: newNickname }).then((res) => {
      const newUserAuth = { ...userAuthInfo, name: newNickname }
      dispatch(changeuserAuthInfo(newUserAuth))
      localStorage.setItem('userAuthInfo', JSON.stringify(newUserAuth))
      closeProfileEditModal()
    })
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTabIndex])

  return {
    isLoading,
    list,
    currentTabIndex,
    Component,
    onClickRoot,
    onClickEllipsisButton,
    onClickModal,
    openProfileEditModal,
    userAuthInfo,
    openResignModal,
    dDayList,
    isDdayLoading,
    tabInfoList,
    currentPage,
    totalPages,
    closeProfileEditModal,
    changeNickname,
    closeResignModal,
    onClickViewMore,
    isResignModalOpen,
    isProfileEditModalOpen,
    setCurrentPage,
    onClickTabItem,
    isEllipsisModalOpen,
    title,
  }
}
