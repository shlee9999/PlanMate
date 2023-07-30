import { FC, useEffect, useState } from 'react'
import {
  AdminDDay,
  DDayContainer,
  EllipsisImg,
  Email,
  GoogleLogo,
  LeftContainer,
  Nickname,
  ProfileContainer,
  ProfileTypo,
  RightArrow,
  RightContainer,
  Root,
  SeeMore,
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
export const MyPage: FC = () => {
  const [myExamInfo, setMyExamInfo] = useState<ResponsePostType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const onClickEllipsisButton = () => {
    console.log('클릭')
  }
  useEffect(() => {
    findPost({ pages: currentPage - 1 }).then((res) => {
      if (res) {
        const response = res as FindPostResponseProps
        setMyExamInfo(response.postDtoList)
      }
    })
  }, [currentPage])
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
        </DDayContainer>
      </LeftContainer>
      <RightContainer>
        {myExamInfo.map((examinfo) => (
          <ExamInfoItem {...examinfo} key={examinfo.postId} />
        ))}
      </RightContainer>
    </Root>
  )
}
