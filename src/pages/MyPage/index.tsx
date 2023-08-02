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

const myPageTabList = ['작성한 글', '작성한 댓글', '스크랩한 글']
const sampleDDayList = [
  {
    title: '테스트1saasdsadfhjoisdfoasdjofjdsaofjdsoajsdfojdsoajo',
    dDay: 30,
    date: '2023-08-32',
    isMarked: true,
    dDayId: 0,
  },
  { title: '테스트2', dDay: 38, date: '2023-08-32', isMarked: true, dDayId: 1 },
  { title: '테스트3', dDay: 50, date: '2023-08-32', isMarked: true, dDayId: 2 },
  { title: '테스트4', dDay: 80, date: '2023-08-32', isMarked: false, dDayId: 3 },
  { title: '테스트5', dDay: 90, date: '2023-08-32', isMarked: false, dDayId: 4 },
  { title: '테스트6', dDay: 100, date: '2023-08-32', isMarked: false, dDayId: 5 },
  { title: '테스트7', dDay: 105, date: '2023-08-32', isMarked: false, dDayId: 6 },
]

export const MyPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<string>(myPageTabList[0])

  const [myPostList, setMyPostList] = useState<ResponsePostType[]>()
  const [myCommentList, setMyCommentList] = useState<ResponseCommentType[]>()
  const [scrappedPostList, setScrappedPostList] = useState<ResponsePostType[]>()

  const onClickEllipsisButton = () => {
    console.log('클릭')
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

  useEffect(() => {
    findPost({ pages: currentPage - 1 }).then((res) => {
      if (res) {
        const response = res as FindPostResponseProps
        setMyPostList(response.postDtoList)
        setCurrentPage(1)
      }
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentTab])

  return (
    <Root>
      <LeftContainer>
        <TitleWrapper>
          <Nickname>메이트</Nickname>
          님의 <Title>마이페이지 👋</Title>
        </TitleWrapper>
        <ProfileTypo>프로필</ProfileTypo>
        <ProfileContainer>
          <UserName>이성훈</UserName>님
          <Email>
            <GoogleLogo alt="google_logo" src={googleLogo} />
            oklshop555@naver.com
          </Email>
          <EllipsisImg onClick={onClickEllipsisButton} />
        </ProfileContainer>
        <TypoWrapper>
          <AdminDDay>D-DAY 관리</AdminDDay>
          <SeeMore>
            더보기
            <RightArrow src={rightArrow} alt="right_arrow" />
          </SeeMore>
        </TypoWrapper>
        <DDayContainer>
          {sampleDDayList.map((dday) => (
            <DDayItem {...dday} key={dday.dDayId} />
          ))}

          <ArrowWrapper>
            <LeftArrow src={rightArrow} />
            <RightArrow src={rightArrow} />
          </ArrowWrapper>
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
