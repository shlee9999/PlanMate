import * as s from './styled'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Pagination, Display, PostItem } from 'components'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { examInfoTagList } from 'constants/tagList'
import { findPostWithTag } from 'api/post/find/findPostWithTag'
import { TagContainer } from './TagContainer/TagContainer'

export const ExamInfoPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState('')
  const { data, isLoading } = useQuery<FindAllPostResponseProps>(
    ['findAllResponse', currentPage, selectedTag],
    () =>
      selectedTag === ''
        ? findAll({ pages: currentPage - 1 })
        : findPostWithTag({ pages: currentPage - 1, tagName: selectedTag }),
    { keepPreviousData: true }
  )
  const examInfoList = data?.postDtoList || []
  const totalPage = data?.totalPages || 0

  const navigate = useNavigate()
  const onClickBulletinButton = () => navigate('/examinfo/post', { state: { initialTag: selectedTag } })

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [data])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])
  const selectorProps = {
    selectedTag: selectedTag,
    setSelectedTag: setSelectedTag,
    tagList: [''].concat(examInfoTagList),
    selectorHeight: 30,
    selectorWidth: 150,
    title: '',
  }
  return (
    <s.Root>
      <s.TypoWrapper>
        <s.UpperDescriptionTypo>유용한 정보를 찾아볼까요? </s.UpperDescriptionTypo>
        <s.TitleTypo>수험정보 👀</s.TitleTypo>
        <Display on="XLARGE">
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
        <Display on="LARGE">
          <s.LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</s.LowerDescriptionTypo>
        </Display>
      </s.TypoWrapper>
      <TagContainer tagList={examInfoTagList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      {/* Spinner 때문에 임시 변환 */}
      <s.ExamInfoWrapper>
        {isLoading ? (
          <s.PostSpinner>Loading...</s.PostSpinner>
        ) : examInfoList?.length !== 0 ? (
          examInfoList?.map((examInfo) => <PostItem {...examInfo} key={examInfo.postId} />)
        ) : (
          <s.NoContent icon="pencil" descriptions={['아직 게시글이 없어요', '첫 게시글을 올려볼까요?']} />
        )}
        <s.BulletinButton onClick={onClickBulletinButton} icon="register">
          글쓰기
        </s.BulletinButton>
        <Display on="MEDIUM">
          <s.StyledTagSelector {...selectorProps} />
        </Display>
        <Display on="SMALL">
          <s.StyledTagSelector {...selectorProps} />
        </Display>
      </s.ExamInfoWrapper>
      <s.PaginationWrapper>
        {!isLoading && <Pagination currentPage={currentPage} totalPages={totalPage} setCurrentPage={setCurrentPage} />}
      </s.PaginationWrapper>
    </s.Root>
  )
}
