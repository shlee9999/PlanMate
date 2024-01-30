import { FC } from 'react'
import * as s from './styled'
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
    <s.NoContentDescription className={className}>
      {icons[icon]}
      <s.DescriptionTypoContainer>
        {descriptions?.map((description, index) => (
          <s.NoContentTypo key={index}>{description}</s.NoContentTypo>
        ))}
      </s.DescriptionTypoContainer>
    </s.NoContentDescription>
  )
}
