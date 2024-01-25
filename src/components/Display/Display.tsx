import { FC, ReactNode } from 'react'
import * as s from './styled'

type DisplayProps = {
  on: 'MOBILE' | 'TABLET' | 'DESKTOP'
  children: ReactNode
  className?: string
}

export const Display: FC<DisplayProps> = ({ className, on, children }) => {
  return (
    <s.Root $on={on} className={className}>
      {children}
    </s.Root>
  )
}
