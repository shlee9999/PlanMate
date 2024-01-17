import { FC } from 'react'
import { CloseButton, Root, Title, Wrapper } from './styled'
import { Variants } from 'framer-motion'

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
    <Wrapper
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
      <Root $bgColor={bgColor}>
        <Title>{title}</Title>
        <CloseButton onClick={onClickClose} />
      </Root>
    </Wrapper>
  )
}