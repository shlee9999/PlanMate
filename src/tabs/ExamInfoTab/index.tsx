//수험정보 탭

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
import { BulletinTab } from './BulletinTab'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'
import { generateArray } from 'utils/helper'
import sampleInfoList from 'constants/sampleInfoList.json'
import leftArrow from 'assets/images/left_arrow.png'
import rightArrow from 'assets/images/right_arrow.png'
export const ExamInfoTab = () => {
  const [ExamInfoList, setExamInfoList] = useState<ResponsePostType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
  const [isBulletin, setIsBulletin] = useState<boolean>(false)
  const onClickBulletinButton = () => {
    setIsBulletin(true)
  }
  const cancelBulletin = (): void => {
    setIsBulletin(false)
  }
  const onClickPageNumber = (page: number) => (): void => {
    setCurrentPage(page)
  }
  async function loadExamInfoList() {
    await findAll({
      pages: 0,
    }).then((res: ResponsePostType | any) => {
      setExamInfoList(res)
    })
  }

  useEffect(() => {
    scrollToTop()
    setTimeout(() => {
      loadExamInfoList()
    }, 500)
  }, [isBulletin])

  if (!isBulletin) {
    // if (ExamInfoList.length === 0) return <Root>등록된 게시물이 없습니다.</Root>
    return (
      <Root>
        {/* {ExamInfoList.map((sampleInfo, index) => (
          <ExamInfoItem {...sampleInfo} key={index} />
        ))} */}
        {sampleInfoList.postInfoList.map((sampleInfo, index) => (
          <ExamInfoItem {...sampleInfo} key={index} />
        ))}
        <BulletinButton onClick={onClickBulletinButton}>글쓰기</BulletinButton>
        <PaginationWrapper>
          <LeftArrowImg src={leftArrow} />
          <PageNumberWrapper>
            {generateArray(Math.floor(currentPage / 10 + 1)).map((num, index) =>
              num === currentPage ? (
                <CurrentPageNumberTypo key={index}>{num}</CurrentPageNumberTypo>
              ) : (
                <PageNumberTypo key={index} onClick={onClickPageNumber(num)}>
                  {num}
                </PageNumberTypo>
              )
            )}
          </PageNumberWrapper>
          <RightArrowImg src={rightArrow} />
        </PaginationWrapper>
      </Root>
    )
  }
  return <BulletinTab cancelBulletin={cancelBulletin} />
}
