import { FC, ReactNode } from 'react'
import { InfoBoxVar, Root } from './styled'

type InfoBoxProps = {
  className?: string
  children?: ReactNode | string
  left?: boolean
  right?: boolean
}

export const InfoBox: FC<InfoBoxProps> = ({ className, children, left, right }) => {
  return (
    <Root
      className={className}
      variants={InfoBoxVar}
      initial={left ? 'initial_left' : right ? 'initial_right' : 'initial'}
      animate="animate"
    >
      {children}
    </Root>
  )
}
