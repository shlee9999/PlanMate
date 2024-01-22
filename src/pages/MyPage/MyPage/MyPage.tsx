import { FC, useEffect, useState } from 'react'
import { DDayItem, ResignModal } from '../components'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { FindAllScheduleResponseProps, findAllSchedule } from 'api/schedule/findAllSchedule'
import { ProfileEditModal } from 'pages/MyPage/components/'
import { changeName } from 'api/member/changeName'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { fixSchedule } from 'api/schedule/fixSchedule'
import { GoogleCustom } from 'assets/SvgComponents'
import { ExamInfoComment, ExamInfoItem } from 'pages/ExamInfo/components'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CenterSpinner } from 'commonStyled'
import { FindScrappedPostResponseProps, findScrappedPost } from 'api/post/find/findScrappedPost'
import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import * as s from './styled'

const myPageTabList = ['작성한 글', '작성한 댓글', '스크랩한 글']
// const sampleDDayList = [
//   { scheduleId: 0, memberId: 3, title: '테스트2', targetDate: '2024-08-20', isFixed: true },
//   { scheduleId: 1, memberId: 3, title: '테스트3', targetDate: '2024-08-30', isFixed: true },
//   { scheduleId: 2, memberId: 3, title: '테스트4', targetDate: '2024-09-20', isFixed: false },
//   { scheduleId: 3, memberId: 3, title: '테스트5', targetDate: '2024-10-25', isFixed: false },
//   { scheduleId: 4, memberId: 3, title: '테스트6', targetDate: '2024-11-30', isFixed: false },
//   { scheduleId: 5, memberId: 3, title: '테스트7', targetDate: '2024-12-31', isFixed: false },
// ]

export const MyPage: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<string>(myPageTabList[0])
  const [isEllipsisModalOpen, setIsEllipsisModalOpen] = useState<boolean>(false)
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState<boolean>(false)
  const [isResignModalOpen, setIsResignModalOpen] = useState<boolean>(false)
  const [fixedIndex, setFixedIndex] = useState<number>(0)
  const { data: dDayList, isLoading } = useQuery<FindAllScheduleResponseProps>(['dDayList'], () => findAllSchedule())
  const { data: myPostInfo, isLoading: isPostLoading } = useQuery<FindPostResponseProps>(
    ['myPostInfo', currentPage],
    () => findPost({ pages: currentPage - 1 })
  )
  const { data: myScrapInfo, isLoading: isScrapLoading } = useQuery<FindScrappedPostResponseProps>(
    ['myScrapInfo', currentPage],
    () => findScrappedPost({ pages: currentPage - 1 })
  )
  const { data: myCommentInfo, isLoading: isCommentLoading } = useQuery<FindCommentResponseProps>(
    ['myCommentInfo', currentPage],
    () => findComment({ pages: currentPage - 1 })
  )
  const myPostList = myPostInfo?.postDtoList || []
  const postTotalPages = myPostInfo?.totalPages || 0
  const myCommentList = myCommentInfo?.commentDtoList || []
  const commentTotalPages = myCommentInfo?.totalPages || 0
  const myScrapList = myScrapInfo?.postDtoList || []
  const scrapTotalPages = myScrapInfo?.totalPages || 0
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const openProfileEditModal = () => {
    setIsProfileEditModalOpen(true)
    setIsEllipsisModalOpen(false)
  }
  const openResignModal = () => {
    setIsResignModalOpen(true)
    setIsEllipsisModalOpen(false)
  }
  const closeProfileEditModal = () => setIsProfileEditModalOpen(false)
  const closeResignModal = () => setIsResignModalOpen(false)
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()

  const onClickEllipsisButton = (e: React.MouseEvent): void => {
    setIsEllipsisModalOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickTabItem = (tab: string) => () => {
    setCurrentPage(1)
    setCurrentTab(tab)
  }
  const renderTabContent = () => {
    switch (currentTab) {
      case myPageTabList[0]: // "작성한 글"
        return isPostLoading ? (
          <CenterSpinner />
        ) : (
          myPostList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
        )
      case myPageTabList[1]: // "작성한 댓글"
        return isCommentLoading ? (
          <CenterSpinner />
        ) : (
          myCommentList?.map((comment) => (
            <ExamInfoComment {...comment} key={comment.commentId} currentPage={currentPage} />
          ))
        )
      case myPageTabList[2]: // "스크랩한 글"
        return isScrapLoading ? (
          <CenterSpinner />
        ) : myScrapList?.length === 0 ? (
          <s.NoScrapDescription icon="pencil" descriptions={['스크랩한 게시물이 없어요!']} />
        ) : (
          myScrapList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
        )
      default:
        return null
    }
  }
  const onClickRoot = () => {
    setIsEllipsisModalOpen(false)
  }
  const changeNickname = (newNickname: string) => {
    changeName({ name: newNickname }).then((res) => {
      const newUserAuth = { ...userAuthInfo, name: newNickname }
      dispatch(changeuserAuthInfo(newUserAuth))
      localStorage.setItem('userAuthInfo', JSON.stringify(newUserAuth))
      closeProfileEditModal()
    })
  }
  const fixDDay = (id: number, index: number) => () => {
    fixSchedule({
      scheduleId: id,
    }).then((res) => {
      setFixedIndex(index)
    })
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTab])

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
            <s.DDayContainer title="D-DAY 관리">
              <s.SeeMore onClick={() => navigate('/mypage/events')}>
                더보기
                <s.NextArrow />
              </s.SeeMore>
              <s.DDayList>
                {isLoading ? (
                  <CenterSpinner />
                ) : (
                  dDayList.map((dday, index) => (
                    <DDayItem
                      key={dday.scheduleId}
                      id={dday.scheduleId}
                      title={dday.title}
                      targetDate={dday.targetDate}
                      fixDDay={fixDDay(dday.scheduleId, index)}
                      isFixed={index === fixedIndex}
                    />
                  ))
                )}
              </s.DDayList>
            </s.DDayContainer>
          </s.LeftContainer>
          <s.RightContainer title="나의 활동">
            <s.TabSelector>
              <s.TabRow>
                {myPageTabList.map((tab, index) => (
                  <s.TabItem
                    $isSelected={currentTab === tab}
                    onClick={onClickTabItem(myPageTabList[index])}
                    key={index}
                  >
                    {tab}
                    {currentTab === tab && <s.SelectedLine layoutId="selected_line" transition={{ duration: 0.2 }} />}
                  </s.TabItem>
                ))}
              </s.TabRow>
              <s.TabRow />
            </s.TabSelector>
            <s.MyActivityList>{renderTabContent()}</s.MyActivityList>
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
