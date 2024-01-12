import { FC, ReactNode } from 'react'
import { CloseButton, Root } from './styled'
import { CheckIcon, CloseIcon, PlusIcon, RegisterIcon } from 'assets/SvgComponents'
type IconType = 'close' | 'register' | 'check' | 'plus' | 'none'

type ActionButtonProps = {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  children?: ReactNode | string
  icon: IconType
}

export const ActionButton: FC<ActionButtonProps> = ({ className, onClick, children, icon }) => {
  const Icons = {
    register: <RegisterIcon fill="currentColor" />,
    check: <CheckIcon fill="currentColor" />,
    close: <CloseIcon fill="currentColor" />,
    plus: <PlusIcon fill="currentColor" />,
    none: null,
  }
  const IconComponent = Icons[icon]
  return icon === 'close' ? (
    <CloseButton>
      {IconComponent}
      {children}
    </CloseButton>
  ) : (
    <Root className={className} onClick={onClick}>
      {IconComponent}
      {children}
    </Root>
  )
}
