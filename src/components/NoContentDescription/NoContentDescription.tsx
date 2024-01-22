import { FC } from 'react'
import { DescriptionTypoContainer, NoContentTypo, Root } from './styled'
import { BookCheckIcon, CircleChatIcon, PencilIcon } from 'assets/SvgComponents'
import { useTheme } from 'styled-components'

type NoContentDescriptionProps = {
  icon: 'chat' | 'book_check' | 'pencil'
  className?: string
  descriptions: string[]
}

export const NoContentDescription: FC<NoContentDescriptionProps> = ({ className, icon, descriptions }) => {
  const context = useTheme()
  const icons = {
    chat: <CircleChatIcon fill="currentColor" />,
    book_check: <BookCheckIcon fill={context.background.white} />,
    pencil: <PencilIcon fill="currentColor" />,
  }
  return (
    <Root className={className}>
      {icons[icon]}
      <DescriptionTypoContainer>
        {descriptions?.map((description, index) => (
          <NoContentTypo key={index}>{description}</NoContentTypo>
        ))}
      </DescriptionTypoContainer>
    </Root>
  )
}
