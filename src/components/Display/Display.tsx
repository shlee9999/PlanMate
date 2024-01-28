import * as s from './styled'
import { ViewportType } from 'enums'
import { FC, ReactNode } from 'react'
export type DisplayProps = {
  on: ViewportType
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
