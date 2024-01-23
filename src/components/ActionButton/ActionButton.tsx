import { FC, ReactNode } from 'react'
import { CloseButton, Root } from './styled'
import { CheckIcon, CloseIcon, PlusIcon, RegisterIcon, TrashIcon } from 'assets/SvgComponents'
import { useTheme } from 'styled-components'
type IconType = 'close' | 'register' | 'check' | 'plus' | 'none' | 'trash'

type ActionButtonProps = {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  children?: ReactNode | string
  icon: IconType
  color?: 'red'
}

export const ActionButton: FC<ActionButtonProps> = ({ className, onClick, children, icon, color }) => {
  const theme = useTheme()
  const Icons = {
    register: <RegisterIcon fill="currentColor" />,
    check: <CheckIcon fill="currentColor" />,
    close: <CloseIcon />,
    plus: <PlusIcon fill="currentColor" />,
    trash: <TrashIcon />,
    none: null,
  }
  const buttonColor = color === 'red' ? theme.warning : color
  const IconComponent = Icons[icon]

  return icon === 'close' ? (
    <CloseButton>
      {IconComponent}
      {children}
    </CloseButton>
  ) : (
    <Root className={className} onClick={onClick} $color={color ? buttonColor : theme.primary.default}>
      {IconComponent}
      {children}
    </Root>
  )
}
