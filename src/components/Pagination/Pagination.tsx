import { Dispatch, FC, SetStateAction } from 'react'
import { numberUtils } from 'utils'
import * as s from './styled'

type PaginationProps = {
  currentPage: number
  totalPages: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const onClickLeftArrow = () => setCurrentPage((prev) => (prev - 1 > 0 ? prev - 1 : prev))
  const onClickRightArrow = () => setCurrentPage((prev) => (prev + 1 <= totalPages ? prev + 1 : prev))
  const onClickPageNumber = (page) => () => setCurrentPage(page)
  return (
    <s.Root>
      <s.PrevButton onClick={onClickLeftArrow} />
      {totalPages === 0 && currentPage === 1 ? (
        <s.CurrentPageNumberTypo>1</s.CurrentPageNumberTypo>
      ) : (
        numberUtils.createTenSequentialNumbers(Math.floor(currentPage / 10 + 1) * 10 - 9).map((num, index) => {
          if (index >= totalPages) return null
          if (num === currentPage) {
            return <s.CurrentPageNumberTypo key={index}>{num}</s.CurrentPageNumberTypo>
          } else {
            return (
              <s.PageNumberTypo key={index} onClick={onClickPageNumber(num)}>
                {num}
              </s.PageNumberTypo>
            )
          }
        })
      )}
      <s.NextButton onClick={onClickRightArrow} />
    </s.Root>
  )
}
