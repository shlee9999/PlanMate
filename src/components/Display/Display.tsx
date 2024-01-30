import * as s from './styled'
import { DisplayType } from 'types'
import { FC, ReactNode } from 'react'
export type DisplayProps = {
  on: DisplayType
  children: ReactNode
  className?: string
}
export const Display: FC<DisplayProps> = ({ className, on, children }) => {
  return (
    <s.Display $on={on} className={className}>
      {children}
    </s.Display>
  )
}
