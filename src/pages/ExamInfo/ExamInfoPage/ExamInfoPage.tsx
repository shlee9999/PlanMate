import * as s from './styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { examinfoTagList } from 'constants/tagList'
import { FindPostWithTagResponseProps, findPostWithTag } from 'api/post/find/findPostWithTag'
import { useQuery } from 'react-query'
import { ExamInfoItem, Pagination } from '../components'

export const ExamInfoPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedTag, setSelectedTag] = useState<string>('')
  const { data, isLoading } = useQuery<
    Promise<FindAllPostResponseProps | FindPostWithTagResponseProps>,
    Error,
    FindAllPostResponseProps,
    string[]
  >(['findAllResponse', currentPage + '', selectedTag], () =>
    selectedTag === ''
      ? findAll({ pages: currentPage - 1 })
      : findPostWithTag({ pages: currentPage - 1, tagName: selectedTag })
  )

  const examInfoList = data?.postDtoList || []
  const totalPage = data?.totalPages || 0

  const handleCurrentPage = (page: number) => (): void => {
    setCurrentPage(page)
  }

  const loadPrevPage = (): void => {
    if (totalPage === 0) return
    if (currentPage >= 1) setCurrentPage((prev) => prev - 1)
  }
  const loadNextPage = (): void => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1)
  }
  const navigate = useNavigate()
  const onClickBulletinButton = (): void => navigate('/examinfo/post')
  const onClickTagButton = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
    setCurrentPage(1)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data])

  return (
    <s.Root>
      <s.TypoWrapper>
        <s.UpperDescriptionTypo>유용한 정보를 찾아볼까요? </s.UpperDescriptionTypo>
        <s.TitleTypo>수험정보 👀</s.TitleTypo>
        <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
      </s.TypoWrapper>
      <s.UpperTagButtonWrapper>
        {examinfoTagList.map((tag, index) =>
          index > 5 ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(examinfoTagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.UpperTagButtonWrapper>
      <s.LowerTagButtonWrapper>
        {examinfoTagList.map((tag, index) =>
          index <= 5 ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(examinfoTagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.LowerTagButtonWrapper>
      {/* Spinner 때문에 임시 변환 */}
      <s.ExamInfoWrapper>
        {isLoading ? (
          <s.PostSpinner>Loading...</s.PostSpinner>
        ) : examInfoList?.length !== 0 ? (
          examInfoList?.map((examInfo) => <ExamInfoItem {...examInfo} key={examInfo.postId} />)
        ) : (
          <s.NoContent icon="pencil" descriptions={['아직 게시글이 없어요', '첫 게시글을 올려볼까요?']} />
        )}

        <s.BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </s.BulletinButton>
      </s.ExamInfoWrapper>
      <s.PaginationWrapper>
        {!isLoading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            onClickLeftArrow={loadPrevPage}
            onClickRightArrow={loadNextPage}
            onClickPageNumber={handleCurrentPage}
          />
        )}
      </s.PaginationWrapper>
    </s.Root>
  )
}
