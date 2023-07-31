import { FC, useEffect, useState } from 'react'
import {
  AdminDDay,
  ArrowWrapper,
  DDayContainer,
  EllipsisImg,
  Email,
  ExamInfoItemContainer,
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
import { ResponsePostType } from 'api/common/commonType'
import { FindPostResponseProps, findPost } from 'api/post/find/findPost'
import googleLogo from 'assets/images/google_logo.png'
import rightArrow from 'assets/images/right_arrow.png'
import { FindCommentResponseProps, findComment } from 'api/comment/findComment'
import { ExamInfoComment } from 'components/ExamInfo/ExamInfoComment'

const myPageTabList = ['작성한 글', '작성한 댓글', '스크랩한 글']
export const MyPage: FC = () => {
  const [myActivityList, setMyActivityList] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<string>(myPageTabList[0])
  const onClickEllipsisButton = () => {
    console.log('클릭')
  }
  const onClickTabItem = (tab: string) => () => {
    setCurrentTab(tab)
  }
  useEffect(() => {
    switch (currentTab) {
      case myPageTabList[0]:
        findPost({ pages: currentPage - 1 }).then((res) => {
          if (res) {
            const response = res as FindPostResponseProps
            setMyActivityList(response.postDtoList)
            setCurrentPage(1)
          }
        })
        return
      case myPageTabList[1]:
        findComment({
          pages: currentPage - 1,
        }).then((res) => {
          const response = res as FindCommentResponseProps
          console.log(response)
          setMyActivityList(response.commentDtoList)
        })
        return
      case myPageTabList[2]:
        return
    }
  }, [currentPage, currentTab])

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
          <DDayItem title={'테스트'} dDay={100} date={'2023-08-32'} isMarked={true} />
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
          <ExamInfoItemContainer>
            {myActivityList.map((activity) => {
              switch (currentTab) {
                case myPageTabList[0]:
                  return <ExamInfoItem {...activity} key={activity.postId} />
                case myPageTabList[1]:
                  return <ExamInfoComment {...activity} key={activity.commentId} />
                case myPageTabList[2]:
                  return
              }
            })}
          </ExamInfoItemContainer>
        </MyActivityContainer>
      </RightContainer>
    </Root>
  )
}
