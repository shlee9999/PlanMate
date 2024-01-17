import { FC } from 'react'
import { Variants } from 'framer-motion'
import * as s from './styled'

type AppointmentProps = {
  bgColor: string
  height: number
  title: string
  onClick: (e: React.MouseEvent) => void
  onMouseDown: (e: React.MouseEvent) => void
  onClickClose: (e: React.MouseEvent) => void
  id: number
}

export const Appointment: FC<AppointmentProps> = ({
  bgColor,
  height,
  onClick,
  onMouseDown,
  title,
  onClickClose,
  id,
}) => {
  const AppVar: Variants = {
    initial: {
      height: 0,
    },
    animate: {
      height: height * 103 + '%',
      transition: {
        bounce: 0.6,
        duration: 0.9,
        type: 'spring',
      },
    },
    exit: {
      scaleY: 0,
    },
  }
  return (
    <s.Wrapper
      $bgColor={bgColor}
      $height={height}
      onClick={onClick}
      onMouseDown={onMouseDown}
      variants={AppVar}
      initial="initial"
      animate="animate"
      exit="exit"
      key={id}
    >
      <s.Root $bgColor={bgColor}>
        <s.Title>{title}</s.Title>
        <s.CloseButton onClick={onClickClose} />
      </s.Root>
    </s.Wrapper>
  )
}
