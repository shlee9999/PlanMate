import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import {
  BulletinButton,
  BulletinIcon,
  CurrentPageNumberTypo,
  ExamInfoWrapper,
  LeftArrowImg,
  LowerDescriptionTypo,
  LowerTagButtonWrapper,
  NoPostTypo,
  PageNumberTypo,
  PageNumberWrapper,
  PaginationWrapper,
  RightArrowImg,
  Root,
  Tag,
  TagButton,
  TitleTypo,
  TypoWrapper,
  UpperDescriptionTypo,
  UpperTagButtonWrapper,
} from './styled'
import { useEffect, useState } from 'react'

import { ResponsePostType } from 'api/common/commonType'
import { generateArray } from 'utils/helper'
import sampleInfoList from 'constants/sampleInfoList.json'
import leftArrow from 'assets/images/left_arrow.png'
import rightArrow from 'assets/images/right_arrow.png'

import { useLoaderData, useNavigate } from 'react-router-dom'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { tagList } from 'constants/tagList'

export const ExamInfoPage = () => {
  // const [examInfoList, setExamInfoList] = useState<ResponsePostType[]>(useLoaderData() as ResponsePostType[])
  const [examInfoList, setExamInfoList] = useState<ResponsePostType[]>(sampleInfoList.postInfoList) //서버 꺼져있어도 되도록
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>((sampleInfoList.postInfoList.length - 1) / 10 + 1)
  const onClickPageNumber = (page: number) => (): void => {
    setCurrentPage(page)
  }

  const onClickRightArrow = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const onClickLeftArrow = () => {
    setCurrentPage((prev) => prev - 1)
  }
  const navigate = useNavigate()

  const onClickBulletinButton = (): void => {
    navigate('/examinfo/post')
  }

  useEffect(() => {
    async function loadExamInfo() {
      await findAll({ pages: currentPage - 1 }).then((res: unknown) => {
        const response = res as FindAllPostResponseProps
        setExamInfoList(response.postDtoList as ResponsePostType[])
        setTotalPage(response.totalPages)
      })
    }
    loadExamInfo()
  }, [currentPage])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [examInfoList])
  useEffect(() => {
    console.log(examInfoList)
  }, [examInfoList])
  return (
    <Root>
      <TypoWrapper>
        <UpperDescriptionTypo>유용한 정보를 찾아볼까요? </UpperDescriptionTypo>
        <TitleTypo>수험정보 👀</TitleTypo>
        <LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</LowerDescriptionTypo>
      </TypoWrapper>
      <UpperTagButtonWrapper>
        {tagList.map((tag, index) =>
          index > 5 ? null : (
            <TagButton key={index}>
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </UpperTagButtonWrapper>
      <LowerTagButtonWrapper>
        {tagList.map((tag, index) =>
          index <= 5 ? null : (
            <TagButton key={index}>
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </LowerTagButtonWrapper>
      <ExamInfoWrapper>
        {examInfoList.length !== 0 ? (
          examInfoList.map((sampleInfo, index) => <ExamInfoItem {...sampleInfo} key={sampleInfo.postId} />)
        ) : (
          <NoPostTypo>등록된 게시물이 없습니다</NoPostTypo>
        )}
        {/* {sampleInfoList.postInfoList.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))} */}

        <BulletinButton onClick={onClickBulletinButton}>
          <BulletinIcon />
          글쓰기
        </BulletinButton>
      </ExamInfoWrapper>
      <PaginationWrapper>
        <LeftArrowImg src={leftArrow} onClick={onClickLeftArrow} />
        <PageNumberWrapper>
          {generateArray(Math.floor(currentPage / 10 + 1) * 10 - 9).map((num, index) => {
            if (index >= totalPage) return null
            return num === currentPage ? (
              <CurrentPageNumberTypo key={index}>{num}</CurrentPageNumberTypo>
            ) : (
              <PageNumberTypo key={index} onClick={onClickPageNumber(num)}>
                {num}
              </PageNumberTypo>
            )
          })}
        </PageNumberWrapper>
        <RightArrowImg src={rightArrow} onClick={onClickRightArrow} />
      </PaginationWrapper>
    </Root>
  )
}
