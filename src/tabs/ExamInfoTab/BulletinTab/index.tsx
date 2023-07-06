import { FC } from 'react'
import { CancelButton, Root } from './styled'

type BulletinTabProps = {
  cancelBulletin: () => void
}

export const BulletinTab: FC<BulletinTabProps> = ({ cancelBulletin }) => {
  return (
    <Root>
      BulletinTab
      <CancelButton onClick={cancelBulletin}>취소</CancelButton>
    </Root>
  )
}
