import { FC } from 'react'
import { Root, Title } from './styled'

type AppointmentProps = {
  bgColor: string
  height: number
  title: string
  onClick: (e: React.MouseEvent) => void
  onMouseDown: (e: React.MouseEvent) => void
}

export const Appointment: FC<AppointmentProps> = ({ bgColor, height, onClick, onMouseDown, title }) => {
  return (
    <Root $bgColor={bgColor} $height={height} onClick={onClick} onMouseDown={onMouseDown}>
      <Title>{title}</Title>
    </Root>
  )
}
