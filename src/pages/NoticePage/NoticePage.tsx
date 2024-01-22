import * as s from './styled'
import { useEffect, useState } from 'react'
import { ResponseNoticeType } from 'api/types/PostType'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FindAllNoticeResponseProps, findAllNotice } from 'api/notice/findAllNotice'
import { ExamInfoItem, Pagination } from 'pages/ExamInfo/components'

export const NoticePage = () => {
  const data = useLoaderData() as FindAllNoticeResponseProps
  const [examInfoList, setExamInfoList] = useState<ResponseNoticeType[]>(data.noticeDtoList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(data.totalPages)
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
    findAllNotice({ pages: currentPage - 1 }).then((res: unknown) => {
      const response = res as FindAllNoticeResponseProps
      setExamInfoList(response.noticeDtoList)
      setTotalPage(response.totalPages)
    })
  }, [currentPage])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [examInfoList])

  return (
    <s.Root>
      <s.TypoWrapper>
        <s.UpperDescriptionTypo>플랜메이트</s.UpperDescriptionTypo>
        <s.TitleTypo>공지사항 📢</s.TitleTypo>
      </s.TypoWrapper>
      <s.ExamInfoWrapper>
        {examInfoList.length !== 0 ? (
          examInfoList.map((examInfo) => <ExamInfoItem postTagList={[]} {...examInfo} key={examInfo.noticeId} />)
        ) : (
          <s.NoContent icon="pencil" descriptions={['아직 게시글이 없어요', '첫 게시글을 올려볼까요?']} />
        )}
        <s.BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </s.BulletinButton>
      </s.ExamInfoWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        onClickLeftArrow={loadPrevPage}
        onClickRightArrow={loadNextPage}
        onClickPageNumber={handleCurrentPage}
      />
    </s.Root>
  )
}
