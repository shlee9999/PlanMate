import { FC, ReactNode } from 'react'
import { DescriptionTypoContainer, Icon, Root } from './styled'
import { BookCheckIcon, CircleChatIcon, PencilIcon } from 'assets/SvgComponents'

type NoContentDescriptionProps = {
  icon: 'chat' | 'book_check' | 'pencil'
  children: ReactNode
}

export const NoContentDescription: FC<NoContentDescriptionProps> = ({ icon, children }) => {
  const icons = {
    chat: <CircleChatIcon fill="currentColor" />,
    book_check: <BookCheckIcon fill="currentColor" />,
    pencil: <PencilIcon fill="currentColor" />,
  }
  return (
    <Root>
      {icons[icon]}
      <DescriptionTypoContainer>{children}</DescriptionTypoContainer>
    </Root>
  )
}
