import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { findPostWithTag } from 'api/post/find/findPostWithTag'
import { useQuery } from 'react-query'
import { QueryKeys } from 'types'
type useExamInfoListProps = {
  currentPage: number
  selectedTag: string
}
export const useExamInfoList = ({ currentPage, selectedTag }: useExamInfoListProps) => {
  const { data, isLoading } = useQuery<FindAllPostResponseProps>(
    [QueryKeys.findAllResponse, currentPage, selectedTag],
    () =>
      selectedTag === ''
        ? findAll({ pages: currentPage - 1 })
        : findPostWithTag({ pages: currentPage - 1, tagName: selectedTag }),
    { keepPreviousData: true }
  )
  const examInfoList = data?.postDtoList || []
  const totalPage = data?.totalPages || 0

  return { examInfoList, totalPage, isLoading }
}
