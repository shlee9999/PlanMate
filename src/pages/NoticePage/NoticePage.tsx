import * as s from './styled'
import { useEffect, useState } from 'react'
import { ResponseNoticeType } from 'api/types/PostType'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FindAllNoticeResponseProps, findAllNotice } from 'api/notice/findAllNotice'
import { Pagination, PostItem } from 'components'

export const NoticePage = () => {
  const data = useLoaderData() as FindAllNoticeResponseProps
  const [examInfoList, setExamInfoList] = useState<ResponseNoticeType[]>(data.noticeDtoList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(data.totalPages)
  const navigate = useNavigate()
  const onClickBulletinButton = () => navigate('/notice/post')

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
        <s.SubTitle>플랜메이트</s.SubTitle>
        <s.PageTitle>공지사항 📢</s.PageTitle>
      </s.TypoWrapper>
      <s.PostContainer>
        {examInfoList.length !== 0 ? (
          examInfoList.map((examInfo) => <PostItem postTagList={[]} {...examInfo} key={examInfo.noticeId} />)
        ) : (
          <s.NoNotice icon="book_check" descriptions={['아직 공지사항이 없어요!']} />
        )}
        <s.BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </s.BulletinButton>
      </s.PostContainer>
      <Pagination currentPage={currentPage} totalPages={totalPage} setCurrentPage={setCurrentPage} />
    </s.Root>
  )
}
