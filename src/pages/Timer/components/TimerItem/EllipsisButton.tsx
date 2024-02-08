import { FC } from 'react'
import * as s from './styled'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type EllipsisButtonProps = {
  openModal: () => void
}

export const EllipsisButton: FC<EllipsisButtonProps> = ({ openModal }) => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const onClick = () => !isNavBlocked && openModal()

  return <s.EllipsisButton onClick={onClick} />
}
