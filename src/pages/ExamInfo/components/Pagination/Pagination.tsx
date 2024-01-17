import { FC } from 'react'
import * as s from './styled'
import { generateArray } from 'utils/helper'
import { RightArrow } from 'assets/SvgComponents'

type PaginationProps = {
  currentPage: number
  totalPage: number
  onClickLeftArrow: () => void
  onClickRightArrow: () => void
  onClickPageNumber: (page: number) => () => void
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  onClickLeftArrow,
  onClickRightArrow,
  onClickPageNumber,
}) => {
  return (
    <s.Root>
      <s.LeftArrow onClick={onClickLeftArrow} />
      {totalPage === 0 && currentPage === 1 ? (
        <s.CurrentPageNumberTypo>1</s.CurrentPageNumberTypo>
      ) : (
        generateArray(Math.floor(currentPage / 10 + 1) * 10 - 9).map((num, index) => {
          if (index >= totalPage) return null
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
      <RightArrow onClick={onClickRightArrow} />
    </s.Root>
  )
}
