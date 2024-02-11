import { Dispatch, FC, SetStateAction } from 'react'
import { numberUtils } from 'utils'
import * as s from './styled'

type PaginationProps = {
  className?: string
  currentPage: number
  totalPages: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage, className }) => {
  const onClickLeftArrow = () => setCurrentPage((prev) => (prev - 1 > 0 ? prev - 1 : prev))
  const onClickRightArrow = () => setCurrentPage((prev) => (prev + 1 <= totalPages ? prev + 1 : prev))
  const onClickPageNumber = (page) => () => setCurrentPage(page)
  if (totalPages === 0) return null
  return (
    <s.Pagination className={className}>
      <s.PrevButton onClick={onClickLeftArrow} />
      {totalPages === 1 && currentPage === 1 ? (
        <s.PageNumberTypo $isCurrent={true}>1</s.PageNumberTypo>
      ) : (
        numberUtils.createPaginationNumbers(currentPage, totalPages).map((page, index) => {
          return (
            <s.PageNumberTypo $isCurrent={page === currentPage} key={index} onClick={onClickPageNumber(page)}>
              {page}
            </s.PageNumberTypo>
          )
        })
      )}
      <s.NextButton onClick={onClickRightArrow} />
    </s.Pagination>
  )
}
