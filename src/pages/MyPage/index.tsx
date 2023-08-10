import { FC, ReactComponentElement, useEffect, useState } from 'react'
import {
  AdminDDay,
  ArrowWrapper,
  DDayContainer,
  EllipsisImg,
  Email,
  CurrentContentContainer,
  GoogleLogo,
  LeftArrow,
  LeftContainer,
  MyActivity,
  MyActivityContainer,
  Nickname,
  ProfileContainer,
  ProfileTypo,
  RightArrow,
  RightContainer,
  Root,
  SeeMore,
  TabItem,
  TabSelector,
  Title,
  TitleWrapper,
  TypoWrapper,
  UserName,
  EllipsisModal,
  EllipsisEditButton,
  EllipsisResignButton,
} from './styled'
import { DDayItem } from 'components/MyPage/DDayItem'
import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import googleLogo from 'assets/images/google_logo.png'
import rightArrow from 'assets/images/right_arrow.png'
import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'
import { findScrappedPost } from 'api/post/find/findScrappedPost'
import { ResponseCommentType, ResponsePostType } from 'api/common/commonType'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { FindAllScheduleResponseProps, findAllSchedule } from 'api/schedule/findAllSchedule'

const myPageTabList = ['작성한 글', '작성한 댓글', '스크랩한 글']
const sampleDDayList = [
  { id: 0, title: '테스트2', targetDate: '2023-08-20', isMarked: true },
  { id: 1, title: '테스트3', targetDate: '2023-08-30', isMarked: true },
  { id: 2, title: '테스트4', targetDate: '2023-09-20', isMarked: false },
  { id: 3, title: '테스트5', targetDate: '2023-10-25', isMarked: false },
  { id: 4, title: '테스트6', targetDate: '2023-11-30', isMarked: false },
  { id: 5, title: '테스트7', targetDate: '2023-12-31', isMarked: false },
]

export const MyPage: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentDDayList, setCurrentDDayList] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<string>(myPageTabList[0])
  const [isEllipsisModalOpen, setIsEllipsisModalOpen] = useState<boolean>(false)
  const [myPostList, setMyPostList] = useState<ResponsePostType[]>()
  const [myCommentList, setMyCommentList] = useState<ResponseCommentType[]>()
  const [scrappedPostList, setScrappedPostList] = useState<ResponsePostType[]>()

  const onClickEllipsisButton = (e: React.MouseEvent): void => {
    setIsEllipsisModalOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onClickTabItem = (tab: string) => () => {
    switch (tab) {
      case myPageTabList[0]:
        if (!myPostList)
          findPost({ pages: currentPage - 1 }).then((res) => {
            if (res) {
              const response = res as FindPostResponseProps
              setMyPostList(response.postDtoList)
              setCurrentPage(1)
              setCurrentTab(tab)
            }
          })
        else setCurrentTab(tab)
        return
      case myPageTabList[1]:
        if (!myCommentList)
          findComment({
            pages: currentPage - 1,
          }).then((res) => {
            const response = res as FindCommentResponseProps
            setMyCommentList(response.commentDtoList)
            setCurrentTab(tab)
          })
        else setCurrentTab(tab)
        return
      case myPageTabList[2]:
        if (!scrappedPostList)
          findScrappedPost({ pages: currentPage - 1 }).then((res) => {
            if (res) {
              const response = res as FindPostResponseProps
              setScrappedPostList(response.postDtoList)
              setCurrentPage(1)
              setCurrentTab(tab)
            }
          })
        else setCurrentTab(tab)
        return
    }
    setCurrentTab(tab)
  }
  const renderTabContent = () => {
    switch (currentTab) {
      case myPageTabList[0]: // "작성한 글"
        return myPostList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
      case myPageTabList[1]: // "작성한 댓글"
        return myCommentList?.map((comment) => <ExamInfoComment {...comment} key={comment.commentId} />)
      case myPageTabList[2]: // "스크랩한 글"
        return scrappedPostList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
      default:
        return null
    }
  }
  const onClickRoot = () => {
    setIsEllipsisModalOpen(false)
  }

  useEffect(() => {
    findPost({ pages: currentPage - 1 }).then((res) => {
      if (res) {
        const response = res as FindPostResponseProps
        setMyPostList(response.postDtoList)
        setCurrentPage(1)
      }
    })
    findAllSchedule().then((res) => {
      const response = res as FindAllScheduleResponseProps
      setCurrentDDayList(response)
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTab])

  return (
    <Root onClick={onClickRoot}>
      <LeftContainer>
        <TitleWrapper>
          <Nickname>{userAuthInfo.name}</Nickname>
          님의 <Title>마이페이지 👋</Title>
        </TitleWrapper>
        <ProfileTypo>프로필</ProfileTypo>
        <ProfileContainer>
          <UserName>{userAuthInfo.name}</UserName>님
          <Email>
            <GoogleLogo alt="google_logo" src={googleLogo} />
            {userAuthInfo.email}
          </Email>
          <EllipsisImg onClick={onClickEllipsisButton} />
          {isEllipsisModalOpen && (
            <EllipsisModal onClick={onClickModal}>
              <EllipsisEditButton>프로필 수정</EllipsisEditButton>
              <EllipsisResignButton>탈퇴하기</EllipsisResignButton>
            </EllipsisModal>
          )}
        </ProfileContainer>
        <TypoWrapper>
          <AdminDDay>D-DAY 관리</AdminDDay>
          <SeeMore>
            더보기
            <RightArrow src={rightArrow} alt="right_arrow" />
          </SeeMore>
        </TypoWrapper>
        <DDayContainer>
          {currentDDayList.map((dday) => (
            <DDayItem {...dday} key={dday.id} />
          ))}

          {/* <ArrowWrapper>
            <LeftArrow src={rightArrow} />
            <RightArrow src={rightArrow} />
          </ArrowWrapper> */}
        </DDayContainer>
      </LeftContainer>
      <RightContainer>
        <MyActivity>나의 활동</MyActivity>
        <MyActivityContainer>
          <TabSelector>
            {myPageTabList.map((tab, index) => (
              <TabItem
                onClick={onClickTabItem(myPageTabList[index])}
                key={index}
                className={currentTab === tab ? 'isSelected' : ''}
              >
                {tab}
              </TabItem>
            ))}
          </TabSelector>
          <CurrentContentContainer>{renderTabContent()}</CurrentContentContainer>
        </MyActivityContainer>
      </RightContainer>
    </Root>
  )
}
