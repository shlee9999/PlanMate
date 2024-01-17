import { FC, ReactNode } from 'react'
import { LoadingTypo, Root, StyledSpinner } from './styled'
import { Variants } from 'framer-motion'

type SpinnerProps = {
  className?: string
  children?: ReactNode | string
}

const SpinnerVar: Variants = {
  initial: {
    rotateZ: 0,
  },
  animate: {
    rotateZ: 360,
    transition: {
      repeat: Infinity,
      duration: 0.9,
      bounce: 0.1,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
}
export const Spinner: FC<SpinnerProps> = ({ className, children }) => {
  return (
    <Root className={className}>
      <StyledSpinner variants={SpinnerVar} initial="initial" animate="animate" />
      <LoadingTypo>{children}</LoadingTypo>
    </Root>
  )
}
