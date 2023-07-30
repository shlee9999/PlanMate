import { FC } from 'react'
import { Date, MarkImg, Root, Title, DDay } from './styled'
import pinImg from 'assets/images/pin.png'
import pinFilledImg from 'assets/images/pin_fill.png'

type DDayItemProps = {
  title: string
  dDay: number
  date: string
  isMarked: boolean
}

export const DDayItem: FC<DDayItemProps> = ({ title, dDay, date, isMarked }) => {
  return (
    <Root className={isMarked ? 'isMarked' : ''}>
      <MarkImg src={isMarked ? pinFilledImg : pinImg} />
      <Title>{title}</Title>
      <Date>{date}</Date>
      <DDay>{dDay}</DDay>
    </Root>
  )
}
