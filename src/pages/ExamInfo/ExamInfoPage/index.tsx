import { ExamInfoItem } from 'pages/ExamInfo/components/ExamInfoItem'
import {
  BulletinButton,
  ExamInfoWrapper,
  LowerDescriptionTypo,
  LowerTagButtonWrapper,
  NoContent,
  PaginationWrapper,
  Root,
  Tag,
  TagButton,
  TitleTypo,
  TypoWrapper,
  UpperDescriptionTypo,
  UpperTagButtonWrapper,
} from './styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { examinfoTagList } from 'constants/tagList'
import { Pagination } from 'pages/ExamInfo/components/Pagination'
import { FindPostWithTagResponseProps, findPostWithTag } from 'api/post/find/findPostWithTag'
import { NoContentTypo } from 'components/NoContentDescription/styled'
import { useQuery } from 'react-query'

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

  const onClickBulletinButton = (): void => {
    navigate('/examinfo/post')
  }

  const onClickTagButton = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
    setCurrentPage(1)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data])

  return (
    <Root>
      <TypoWrapper>
        <UpperDescriptionTypo>유용한 정보를 찾아볼까요? </UpperDescriptionTypo>
        <TitleTypo>수험정보 👀</TitleTypo>
        <LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</LowerDescriptionTypo>
      </TypoWrapper>
      <UpperTagButtonWrapper>
        {examinfoTagList.map((tag, index) =>
          index > 5 ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(examinfoTagList[index])}
            >
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </UpperTagButtonWrapper>
      <LowerTagButtonWrapper>
        {examinfoTagList.map((tag, index) =>
          index <= 5 ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(examinfoTagList[index])}
            >
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </LowerTagButtonWrapper>
      <ExamInfoWrapper>
        {isLoading ? (
          'Loading...'
        ) : examInfoList?.length !== 0 ? (
          examInfoList?.map((examInfo) => <ExamInfoItem {...examInfo} key={examInfo.postId} />)
        ) : (
          <NoContent icon="pencil">
            <NoContentTypo>아직 게시글이 없어요</NoContentTypo>
            <NoContentTypo>첫 게시글을 올려볼까요?</NoContentTypo>
          </NoContent>
        )}

        <BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </BulletinButton>
      </ExamInfoWrapper>
      <PaginationWrapper>
        {!isLoading && (
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            onClickLeftArrow={loadPrevPage}
            onClickRightArrow={loadNextPage}
            onClickPageNumber={handleCurrentPage}
          />
        )}
      </PaginationWrapper>
    </Root>
  )
}
