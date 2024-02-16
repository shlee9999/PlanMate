import { FC } from 'react'
import * as s from './styled'
import { useDetectClickOutside } from 'hooks/useDetectClickOutside'
import { SmallEllipsisModalItemType } from 'types'

type SmallEllipsisModalProps = {
  itemList: SmallEllipsisModalItemType[]
  isOpen: boolean
  closeModal: () => void
}

export const SmallEllipsisModal: FC<SmallEllipsisModalProps> = ({ itemList, isOpen, closeModal }) => {
  if (!isOpen) return null
  const ref = useDetectClickOutside({ isOpen, closeModal })
  return (
    <s.SmallEllipsisModal onClick={(e) => e.stopPropagation()} ref={ref}>
      {itemList.map((item, index) => (
        <s.SmallEllipsisButton key={index} onClick={item.onClick}>
          {item.name}
        </s.SmallEllipsisButton>
      ))}
    </s.SmallEllipsisModal>
  )
}
// ;<s.SmallEllipsisModal onClick={(e) => e.stopPropagation()} ref={ref}>
//   <s.SmallEllipsisEditButton onClick={onClickSmallEllipsisEditButton}>수정</s.SmallEllipsisEditButton>
//   <s.SmallEllipsisDeleteButton onClick={openDeleteCommentModal}>삭제</s.SmallEllipsisDeleteButton>
// </s.SmallEllipsisModal>
