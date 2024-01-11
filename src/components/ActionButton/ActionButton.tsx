import { FC, ReactNode } from 'react'
import { Root } from './styled'
import { CheckIcon, CloseIcon, PlusIcon, RegisterIcon } from 'assets/SvgComponents'
type IconType = 'close' | 'register' | 'check' | 'plus'

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
  }
  const IconComponent = Icons[icon]
  return (
    <Root className={className} onClick={onClick}>
      {IconComponent}
      {children}
    </Root>
  )
}
