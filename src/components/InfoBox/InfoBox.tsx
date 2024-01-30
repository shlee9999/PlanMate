import { FC, ReactNode } from 'react'
import * as s from './styled'

type InfoBoxProps = {
  className?: string
  children?: ReactNode | string
  title?: string
  description?: string
  left?: boolean
  right?: boolean
}

export const InfoBox: FC<InfoBoxProps> = ({ className, children, left, right, title, description: desciption }) => {
  return (
    <s.InfoBox
      className={className}
      variants={s.InfoBoxVar}
      initial={left ? 'initial_left' : right ? 'initial_right' : 'initial'}
      animate="animate"
      style={{ marginTop: title ? 25 : 0 }}
    >
      <s.Header>
        <s.BoxTitle>{title}</s.BoxTitle>
        <s.BoxDescription>{desciption}</s.BoxDescription>
      </s.Header>
      {children}
    </s.InfoBox>
  )
}
