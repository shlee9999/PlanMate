import { FC } from 'react'
import * as s from './styled'
import { PlusIcon } from 'assets/SvgComponents'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

type AddSubjectButtonProps = {
  openAddModal: () => void
}

export const AddSubjectButton: FC<AddSubjectButtonProps> = ({ openAddModal }) => {
  const isNavBlocked = useSelector((state: RootState) => state.isNavBlocked)
  const onClick = () => !isNavBlocked && openAddModal()
  return (
    <s.AddSubjectButton onClick={onClick}>
      <PlusIcon />
      과목
    </s.AddSubjectButton>
  )
}
