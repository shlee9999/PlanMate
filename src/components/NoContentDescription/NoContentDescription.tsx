import { FC, ReactNode } from 'react'
import { DescriptionTypoContainer, Root } from './styled'
import { BookCheckIcon, CircleChatIcon, PencilIcon } from 'assets/SvgComponents'

type NoContentDescriptionProps = {
  icon: 'chat' | 'book_check' | 'pencil'
  children: ReactNode
  className?: string
}

export const NoContentDescription: FC<NoContentDescriptionProps> = ({ className, icon, children }) => {
  const icons = {
    chat: <CircleChatIcon fill="currentColor" />,
    book_check: <BookCheckIcon fill="currentColor" />,
    pencil: <PencilIcon fill="currentColor" />,
  }
  return (
    <Root className={className}>
      {icons[icon]}
      <DescriptionTypoContainer>{children}</DescriptionTypoContainer>
    </Root>
  )
}
