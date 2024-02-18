import { FC, ReactNode } from 'react'
import * as s from './styled'
import { CheckIcon, CloseIcon, PlusIcon, RegisterIcon, TrashIcon } from 'assets/SvgComponents'
import { useTheme } from 'styled-components'
type IconType = 'close' | 'register' | 'check' | 'plus' | 'none' | 'trash'

type ActionButtonProps = {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  children?: ReactNode | string
  icon: IconType
  color?: string
}

export const ActionButton: FC<ActionButtonProps> = ({ className, onClick, children, icon, color }) => {
  const theme = useTheme()
  const Icons = {
    register: <RegisterIcon />,
    check: <CheckIcon />,
    close: <CloseIcon />,
    plus: <PlusIcon />,
    trash: <TrashIcon />,
    none: null,
  }
  const buttonColor = color === 'red' ? theme.warning : color
  const IconComponent = Icons[icon]

  return icon === 'close' ? (
    <s.CloseButton className={className} onClick={onClick}>
      {IconComponent}
      {children}
    </s.CloseButton>
  ) : (
    <s.ActionButton className={className} onClick={onClick} $color={color ? buttonColor : theme.primary.default}>
      {IconComponent}
      {children}
    </s.ActionButton>
  )
}
