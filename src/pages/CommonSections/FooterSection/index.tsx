import { FC } from 'react'
import { Root } from './styled'

type FooterSectionProps = {
  className?: string
}

export const FooterSection: FC<FooterSectionProps> = ({ className }) => {
  return <Root className={className}>FooterSection</Root>
}
