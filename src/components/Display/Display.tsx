import { FC } from 'react'
import * as s from './styled'

type DisplayProps = {
  on: 'MOBILE' | 'TABLET' | 'DESKTOP'
}

export const Display: FC<DisplayProps> = ({ on }) => {
  return <s.Root $on={on}>Display</s.Root>
}
