import { ExamInfoItem } from 'pages/ExamInfo/components/ExamInfoItem'
import {
  BulletinButton,
  BulletinIcon,
  ExamInfoWrapper,
  NoPostTypo,
  Root,
  TitleTypo,
  TypoWrapper,
  UpperDescriptionTypo,
} from './styled'
import { useEffect, useState } from 'react'
import { ResponseNoticeType } from 'api/common/commonType'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Pagination } from 'pages/ExamInfo/components/Pagination'
import { findPostWithTag } from 'api/post/find/findPostWithTag'
import { FindAllNoticeResponseProps, findAllNotice } from 'api/notice/findAllNotice'

export const NoticePage = () => {
  const data = useLoaderData() as FindAllNoticeResponseProps
  const [examInfoList, setExamInfoList] = useState<ResponseNoticeType[]>(data.noticeDtoList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(data.totalPages)
  const [selectedTag, setSelectedTag] = useState<string>('')
  const handleCurrentPage = (page: number) => (): void => {
    setCurrentPage(page)
  }

  const loadPrevPage = (): void => {
    if (currentPage >= 1) setCurrentPage((prev) => prev - 1)
  }
  const loadNextPage = (): void => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1)
  }
  const navigate = useNavigate()

  const onClickBulletinButton = (): void => {
    navigate('/notice/post')
  }

  useEffect(() => {
    if (selectedTag === '')
      findAllNotice({ pages: currentPage - 1 }).then((res: unknown) => {
        const response = res as FindAllNoticeResponseProps
        setExamInfoList(response.noticeDtoList)
        setTotalPage(response.totalPages)
      })
    else
      findPostWithTag({
        tagName: selectedTag,
        pages: currentPage - 1,
      }).then((res) => {
        const response = res as FindAllNoticeResponseProps
        setExamInfoList(response.noticeDtoList)
        setTotalPage(response.totalPages)
      })
  }, [currentPage, selectedTag])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [examInfoList])

  return (
    <Root>
      <TypoWrapper>
        <UpperDescriptionTypo>플랜메이트</UpperDescriptionTypo>
        <TitleTypo>공지사항 📢</TitleTypo>
      </TypoWrapper>
      <ExamInfoWrapper>
        {examInfoList.length !== 0 ? (
          examInfoList.map((examInfo) => <ExamInfoItem postTagList={[]} {...examInfo} key={examInfo.noticeId} />)
        ) : (
          <NoPostTypo>등록된 게시물이 없습니다</NoPostTypo>
        )}

        <BulletinButton onClick={onClickBulletinButton}>
          <BulletinIcon />
          글쓰기
        </BulletinButton>
      </ExamInfoWrapper>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onClickLeftArrow={loadPrevPage}
        onClickRightArrow={loadNextPage}
        onClickPageNumber={handleCurrentPage}
      />
    </Root>
  )
}
