import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import {
  BulletinButton,
  CurrentPageNumberTypo,
  LeftArrowImg,
  PageNumberTypo,
  PageNumberWrapper,
  PaginationWrapper,
  RightArrowImg,
  Root,
} from './styled'
import { useEffect, useState } from 'react'

import { ResponsePostType } from 'api/common/commonType'
import { generateArray } from 'utils/helper'
import sampleInfoList from 'constants/sampleInfoList.json'
import leftArrow from 'assets/images/left_arrow.png'
import rightArrow from 'assets/images/right_arrow.png'

import { useLoaderData, useNavigate } from 'react-router-dom'
export const ExamInfoPage = () => {
  const [ExamInfoList, setExamInfoList] = useState<ResponsePostType[]>(useLoaderData() as ResponsePostType[])
  const [currentPage, setCurrentPage] = useState<number>(1)

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
    window.scrollTo({ top: 0 })
  }, [])
  if (ExamInfoList.length === 0) return <Root>등록된 게시물이 없습니다.</Root>
  return (
    <Root>
      {ExamInfoList.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))}
      {/* {sampleInfoList.postInfoList.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))} */}
      <BulletinButton onClick={onClickBulletinButton}>글쓰기</BulletinButton>
      <PaginationWrapper>
        <LeftArrowImg src={leftArrow} onClick={onClickLeftArrow} />
        <PageNumberWrapper>
          {generateArray(Math.floor(currentPage / 10 + 1) * 10 - 9).map((num, index) =>
            num === currentPage ? (
              <CurrentPageNumberTypo key={index}>{num}</CurrentPageNumberTypo>
            ) : (
              <PageNumberTypo key={index} onClick={onClickPageNumber(num)}>
                {num}
              </PageNumberTypo>
            )
          )}
        </PageNumberWrapper>
        <RightArrowImg src={rightArrow} onClick={onClickRightArrow} />
      </PaginationWrapper>
    </Root>
  )
}
