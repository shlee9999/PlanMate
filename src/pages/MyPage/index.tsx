import { FC } from 'react'
import { Root } from './styled'

type MyPageProps = {
  className?: string
}

export const MyPage: FC<MyPageProps> = ({ className }) => {
  return <Root className={className}>MyPageMyPage</Root>
}
