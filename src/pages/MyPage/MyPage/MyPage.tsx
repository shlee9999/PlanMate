import * as s from './styled'
import { FC, useEffect, useState } from 'react'
import { ResignModal } from '../components'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { FindAllDdayResponseProps, findAllDday } from 'api/dday/findAllDday'
import { ProfileEditModal } from 'pages/MyPage/components/'
import { changeName } from 'api/member/changeName'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { GoogleCustom } from 'assets/SvgComponents'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CenterSpinner } from 'commonStyled'
import { FindScrappedPostResponseProps, findScrappedPost } from 'api/post/find/findScrappedPost'
import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import { ResponseCommentType, ResponsePostType } from 'api/types'
import { PostItem, Comment } from 'components'

type TabInfoListProps = {
  title: string
  Component: FC
  list: ResponsePostType[] | ResponseCommentType[]
  isLoading: boolean
  icon: string
  totalPages: number
}
export const MyPage: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [isEllipsisModalOpen, setIsEllipsisModalOpen] = useState(false)
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState(false)
  const [isResignModalOpen, setIsResignModalOpen] = useState(false)
  const { data: dDayList, isLoading: isDdayLoading } = useQuery<FindAllDdayResponseProps>(['dDayList'], () =>
    findAllDday()
  )
  const { data: myPostInfo, isLoading: isPostLoading } = useQuery<FindPostResponseProps>(
    ['myPostInfo', currentPage],
    () => findPost({ pages: currentPage - 1 }),
    { keepPreviousData: true }
  )
  const { data: myScrapInfo, isLoading: isScrapLoading } = useQuery<FindScrappedPostResponseProps>(
    ['myScrapInfo', currentPage],
    () => findScrappedPost({ pages: currentPage - 1 }),
    { keepPreviousData: true }
  )
  const { data: myCommentInfo, isLoading: isCommentLoading } = useQuery<FindCommentResponseProps>(
    ['myCommentInfo', currentPage],
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

  const renderTabContent = () => {
    if (isLoading) return <CenterSpinner>Loading...</CenterSpinner>
    if (list.length === 0) return <s.StyledNoContentDescription icon={'pencil'} descriptions={[`${title}이 없어요!`]} />
    if (currentTabIndex === 0 || currentTabIndex === 2)
      // * 내가 작성한 글, 내가 스크랩한 글
      return (
        <>
          {list.map((item) => (
            <Component {...item} key={item.postId} />
          ))}
        </>
      )

    // * 내가 작성한 댓글
    return (
      <>
        {list.map((item) => (
          <Component key={item.commentId} {...item} currentPage={currentPage} />
        ))}
      </>
    )
  }

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

  return (
    <s.Root>
      <s.Container onClick={onClickRoot}>
        <s.TitleWrapper>
          <s.Nickname>{userAuthInfo.name}</s.Nickname>
          님의 <s.Title>마이페이지 👋</s.Title>
        </s.TitleWrapper>
        <s.MainContainer>
          <s.LeftContainer>
            <s.ProfileContainer title="프로필">
              <s.UserName>{userAuthInfo.name}</s.UserName>님
              <s.Email>
                <GoogleCustom />
                {userAuthInfo.email}
              </s.Email>
              <s.EllipsisImg onClick={onClickEllipsisButton} />
              {isEllipsisModalOpen && (
                <s.EllipsisModal onClick={onClickModal}>
                  <s.EllipsisEditButton onClick={openProfileEditModal}>프로필 수정</s.EllipsisEditButton>
                  <s.EllipsisResignButton onClick={openResignModal}>탈퇴하기</s.EllipsisResignButton>
                </s.EllipsisModal>
              )}
            </s.ProfileContainer>
            <s.StyledDDayContainer
              viewMore
              title="D-DAY 관리"
              onClickViewMore={() => navigate('/mypage/dday')}
              dDayList={dDayList}
              isDDayLoading={isDdayLoading}
            />
          </s.LeftContainer>
          <s.RightContainer title="나의 활동">
            <s.TabSelector>
              <s.TabRow>
                {tabInfoList.map((tabInfo, index) => (
                  <s.TabItem $isSelected={currentTabIndex === index} onClick={onClickTabItem(index)} key={index}>
                    {tabInfo.title}
                    {currentTabIndex === index && (
                      <s.SelectedLine layoutId="selected_line" transition={{ duration: 0.2 }} />
                    )}
                  </s.TabItem>
                ))}
              </s.TabRow>
              <s.TabRow />
            </s.TabSelector>
            <s.TabContentContainer>{renderTabContent()}</s.TabContentContainer>
            <s.StyledPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </s.RightContainer>
        </s.MainContainer>
        {isProfileEditModalOpen && (
          <ProfileEditModal
            closeModal={closeProfileEditModal}
            nickname={userAuthInfo.name}
            changeNickname={changeNickname}
          />
        )}
        {isResignModalOpen && <ResignModal closeModal={closeResignModal} />}
      </s.Container>
    </s.Root>
  )
}
