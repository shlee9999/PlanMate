import { FC } from 'react'
import { CurrentPageNumberTypo, LeftArrowImg, PageNumberTypo, RightArrowImg, Root } from './styled'
import { generateArray } from 'utils/helper'

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
    <Root>
      <LeftArrowImg onClick={onClickLeftArrow} />
      {generateArray(Math.floor(currentPage / 10 + 1) * 10 - 9).map((num, index) => {
        if (index >= totalPage) return null
        return num === currentPage ? (
          <CurrentPageNumberTypo key={index}>{num}</CurrentPageNumberTypo>
        ) : (
          <PageNumberTypo key={index} onClick={onClickPageNumber(num)}>
            {num}
          </PageNumberTypo>
        )
      })}
      <RightArrowImg onClick={onClickRightArrow} />
    </Root>
  )
}
