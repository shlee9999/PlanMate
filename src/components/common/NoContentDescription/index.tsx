import { FC, ReactNode } from 'react'
import { DescriptionTypoContainer, Icon, Root } from './styled'

type NoContentDescriptionProps = {
  src: string
  children: ReactNode
}

export const NoContentDescription: FC<NoContentDescriptionProps> = ({ src, children }) => {
  return (
    <Root>
      <Icon src={src} alt="no_content_icon" />
      <DescriptionTypoContainer>{children}</DescriptionTypoContainer>
    </Root>
  )
}
