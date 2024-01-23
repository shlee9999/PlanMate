import { FC } from 'react'
import * as s from './styled'

type AppointmentProps = {
  bgColor: string
  height: number
  title: string
  onClick: (e: React.MouseEvent) => void
  onMouseDown: (e: React.MouseEvent) => void
  onClickClose: (e: React.MouseEvent) => void
}

export const Appointment: FC<AppointmentProps> = ({ bgColor, height, onClick, onMouseDown, title, onClickClose }) => {
  return (
    <s.Wrapper $bgColor={bgColor} $height={height * 103 + '%'} onClick={onClick} onMouseDown={onMouseDown}>
      <s.Root $bgColor={bgColor}>
        <s.Title>{title}</s.Title>
        <s.CloseButton onClick={onClickClose} />
        <s.LeftBar $bgColor={bgColor} />
      </s.Root>
    </s.Wrapper>
  )
}
