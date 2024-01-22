import { FC } from 'react'
import { numberUtils } from 'utils'
import { RightArrow } from 'assets/SvgComponents'
import * as s from './styled'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onClickLeftArrow: () => void
  onClickRightArrow: () => void
  onClickPageNumber: (page: number) => () => void
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onClickLeftArrow,
  onClickRightArrow,
  onClickPageNumber,
}) => {
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
