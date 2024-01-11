import { FC, useEffect, useState } from 'react'
import { Root, Title } from './styled'
import { Variants } from 'framer-motion'

type AppointmentProps = {
  bgColor: string
  height: number
  title: string
  onClick: (e: React.MouseEvent) => void
  onMouseDown: (e: React.MouseEvent) => void
}

export const Appointment: FC<AppointmentProps> = ({ bgColor, height, onClick, onMouseDown, title }) => {
  const AppVar: Variants = {
    initial: {
      height: 0,
    },
    animate: {
      height: height * 102.5 + '%',
      transition: {
        bounce: 0.6,
        duration: 0.9,
        type: 'spring',
      },
    },
  }
  return (
    <Root
      $bgColor={bgColor}
      $height={height}
      onClick={onClick}
      onMouseDown={onMouseDown}
      variants={AppVar}
      initial="initial"
      animate="animate"
    >
      <Title>{title}</Title>
    </Root>
  )
}
