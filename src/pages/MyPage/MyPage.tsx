import { FC, ReactComponentElement, useEffect, useState } from 'react'
import {
  AdminDDay,
  DDayContainer,
  EllipsisImg,
  Email,
  CurrentContentContainer,
  LeftContainer,
  MyActivity,
  MyActivityContainer,
  Nickname,
  ProfileContainer,
  ProfileTypo,
  NextArrow,
  RightContainer,
  Container,
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
  TabRow,
  Root,
  SelectedLine,
} from './styled'
import { DDayItem } from 'pages/MyPage/components/DDayItem'
import { ExamInfoItem } from 'pages/ExamInfo/components/ExamInfoItem'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import { ExamInfoComment } from 'pages/ExamInfo/components/ExamInfoComment'
import { findScrappedPost } from 'api/post/find/findScrappedPost'
import { ResponseCommentType, ResponsePostType } from 'api/common/commonType'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import { FindAllScheduleResponseProps, findAllSchedule } from 'api/schedule/findAllSchedule'
import { ProfileEditModal } from 'pages/MyPage/components/ProfileEditModal'
import { ResignModal } from 'pages/MyPage/components/ResignModal'
import { changeName } from 'api/member/changeName'
import { changeuserAuthInfo } from 'modules/userAuthInfo'
import { fixSchedule } from 'api/schedule/fixSchedule'
import { addSchedule } from 'api/schedule/addSchedule'
import { GoogleCustom } from 'assets/SvgComponents'

const myPageTabList = ['작성한 글', '작성한 댓글', '스크랩한 글']
const sampleDDayList = [
  { id: 0, memberId: 3, title: '테스트2', targetDate: '2024-08-20', isFixed: true },
  { id: 1, memberId: 3, title: '테스트3', targetDate: '2024-08-30', isFixed: true },
  { id: 2, memberId: 3, title: '테스트4', targetDate: '2024-09-20', isFixed: false },
  { id: 3, memberId: 3, title: '테스트5', targetDate: '2024-10-25', isFixed: false },
  { id: 4, memberId: 3, title: '테스트6', targetDate: '2024-11-30', isFixed: false },
  { id: 5, memberId: 3, title: '테스트7', targetDate: '2024-12-31', isFixed: false },
]

export const MyPage: FC = () => {
  const userAuthInfo = useSelector((state: RootState) => state.userAuthInfo)
  const [currentDDayList, setCurrentDDayList] = useState<FindAllScheduleResponseProps>(sampleDDayList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<string>(myPageTabList[0])
  const [isEllipsisModalOpen, setIsEllipsisModalOpen] = useState<boolean>(false)
  const [myPostList, setMyPostList] = useState<ResponsePostType[]>()
  const [myCommentList, setMyCommentList] = useState<ResponseCommentType[]>()
  const [scrappedPostList, setScrappedPostList] = useState<ResponsePostType[]>()
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState<boolean>(false)
  const [isResignModalOpen, setIsResignModalOpen] = useState<boolean>(false)
  const [fixedIndex, setFixedIndex] = useState<number>(0)
  const dispatch = useDispatch()
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

  const onClickEllipsisButton = (e: React.MouseEvent): void => {
    setIsEllipsisModalOpen((prev) => !prev)
    e.stopPropagation()
  }
  const onClickModal = (e: React.MouseEvent): void => e.stopPropagation()

  const onClickTabItem = (tab: string) => () => {
    switch (tab) {
      case myPageTabList[0]:
        if (!myPostList) {
          // findPost({ pages: currentPage - 1 }).then((res) => {
          //   if (res) {
          //     const response = res as FindPostResponseProps
          //     setMyPostList(response.postDtoList)
          //     setCurrentPage(1)
          //     setCurrentTab(tab)
          //   }
          // })
          setCurrentPage(1)
          setCurrentTab(tab)
        } else setCurrentTab(tab)
        return
      case myPageTabList[1]:
        if (!myCommentList) {
          // findComment({
          //   pages: currentPage - 1,
          // }).then((res) => {
          //   const response = res as FindCommentResponseProps
          //   setMyCommentList(response.commentDtoList)
          //   setCurrentTab(tab)
          // })
          setCurrentTab(tab)
        } else setCurrentTab(tab)
        return
      case myPageTabList[2]:
        if (!scrappedPostList) {
          // findScrappedPost({ pages: currentPage - 1 }).then((res) => {
          //   if (res) {
          //     const response = res as FindPostResponseProps
          //     setScrappedPostList(response.postDtoList)
          //     setCurrentPage(1)
          //     setCurrentTab(tab)
          //   }
          // })
          setCurrentPage(1)
          setCurrentTab(tab)
        } else setCurrentTab(tab)
        return
    }
    setCurrentTab(tab)
  }
  const renderTabContent = () => {
    switch (currentTab) {
      case myPageTabList[0]: // "작성한 글"
        return myPostList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
      case myPageTabList[1]: // "작성한 댓글"
        return myCommentList?.map((comment) => (
          <ExamInfoComment {...comment} key={comment.commentId} currentPage={currentPage} />
        ))
      case myPageTabList[2]: // "스크랩한 글"
        return scrappedPostList?.map((post) => <ExamInfoItem {...post} key={post.postId} />)
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
      id: id,
    }).then((res) => {
      setFixedIndex(index)
    })
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
      for (let i = 0; i < response.length; i++) {
        if (response[i].isFixed) setFixedIndex(i)
      }
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTab])

  return (
    <Root>
      <Container onClick={onClickRoot}>
        <LeftContainer>
          <TitleWrapper>
            <Nickname>{userAuthInfo.name}</Nickname>
            님의 <Title>마이페이지 👋</Title>
          </TitleWrapper>
          <ProfileTypo>프로필</ProfileTypo>
          <ProfileContainer>
            <UserName>{userAuthInfo.name}</UserName>님
            <Email>
              <GoogleCustom />
              {userAuthInfo.email}
            </Email>
            <EllipsisImg onClick={onClickEllipsisButton} />
            {isEllipsisModalOpen && (
              <EllipsisModal onClick={onClickModal}>
                <EllipsisEditButton onClick={openProfileEditModal}>프로필 수정</EllipsisEditButton>
                <EllipsisResignButton onClick={openResignModal}>탈퇴하기</EllipsisResignButton>
              </EllipsisModal>
            )}
          </ProfileContainer>
          <TypoWrapper>
            <AdminDDay>D-DAY 관리</AdminDDay>
            <SeeMore>
              더보기
              <NextArrow fill="currentColor" />
            </SeeMore>
          </TypoWrapper>
          <DDayContainer>
            {currentDDayList.map((dday, index) => (
              <DDayItem {...dday} key={dday.id} fixDDay={fixDDay(dday.id, index)} isFixed={index === fixedIndex} />
            ))}
          </DDayContainer>
        </LeftContainer>
        <RightContainer>
          <MyActivity>나의 활동</MyActivity>
          <MyActivityContainer>
            <TabSelector>
              <TabRow>
                {myPageTabList.map((tab, index) => (
                  <TabItem $isSelected={currentTab === tab} onClick={onClickTabItem(myPageTabList[index])} key={index}>
                    {tab}
                    {currentTab === tab && <SelectedLine layoutId="selected_line" transition={{ duration: 0.2 }} />}
                  </TabItem>
                ))}
              </TabRow>
              <TabRow />
            </TabSelector>
            <CurrentContentContainer>{renderTabContent()}</CurrentContentContainer>
          </MyActivityContainer>
        </RightContainer>
        {isProfileEditModalOpen && (
          <ProfileEditModal
            closeModal={closeProfileEditModal}
            nickname={userAuthInfo.name}
            changeNickname={changeNickname}
          />
        )}
        {isResignModalOpen && <ResignModal closeModal={closeResignModal} />}
      </Container>
    </Root>
  )
}
