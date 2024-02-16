import { FC } from 'react'
import * as s from './styled'
import { useDetectClickOutside } from 'hooks/useDetectClickOutside'
import { SmallEllipsisModalItemType } from 'types'

type SmallEllipsisModalProps = {
  className?: string
  itemList: SmallEllipsisModalItemType[]
  isOpen: boolean
  closeModal: () => void
}

export const SmallEllipsisModal: FC<SmallEllipsisModalProps> = ({ itemList, isOpen, closeModal, className }) => {
  const ref = useDetectClickOutside({ isOpen, closeModal })
  if (!isOpen) return null
  return (
    <s.SmallEllipsisModal className={className} onClick={(e) => e.stopPropagation()} ref={ref}>
      {itemList.map((item, index) => (
        <s.SmallEllipsisButton key={index} onClick={item.onClick}>
          {item.name}
        </s.SmallEllipsisButton>
      ))}
    </s.SmallEllipsisModal>
  )
}
