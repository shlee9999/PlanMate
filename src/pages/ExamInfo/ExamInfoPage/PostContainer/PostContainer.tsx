import * as s from './styled'
import { PostItem, Display, Pagination } from 'components'
import { DISPLAY } from 'types'
import { TagContainer } from '../TagContainer/TagContainer'
import { examInfoTagList } from 'constants/tagList'
import { usePostContainer } from './usePostContainer'

export const PostContainer = () => {
  const {
    isLoading,
    totalPage,
    onClickBulletinButton,
    selectorProps,
    examInfoList,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
  } = usePostContainer()
  return (
    <>
      <TagContainer tagList={examInfoTagList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <s.PostContainer>
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
        <Display on={DISPLAY.MEDIUM}>
          <s.StyledTagSelector {...selectorProps} />
        </Display>
        <Display on={DISPLAY.SMALL}>
          <s.StyledTagSelector {...selectorProps} />
        </Display>
        <s.PaginationWrapper>
          {!isLoading && (
            <Pagination currentPage={currentPage} totalPages={totalPage} setCurrentPage={setCurrentPage} />
          )}
        </s.PaginationWrapper>
      </s.PostContainer>
    </>
  )
}
