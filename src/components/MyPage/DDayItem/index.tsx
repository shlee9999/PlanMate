import { FC } from 'react'
import { Date as TargetDate, MarkImg, Root, Title, DDay, LeftContainer } from './styled'
import pinImg from 'assets/images/pin.png'
import pinFilledImg from 'assets/images/pin_fill.png'

type DDayItemProps = {
  id: number
  title: string
  targetDate: string
  isMarked: boolean
}

export const DDayItem: FC<DDayItemProps> = ({ title, targetDate, isMarked }) => {
  function daysUntil() {
    const specificDate = new Date(targetDate) // Example specific date
    const today = new Date() // Current date
    specificDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    const differenceInTime = specificDate.getTime() - today.getTime()
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)
    return differenceInDays
  }
  const dDay = daysUntil()
  return (
    <Root className={isMarked ? 'isMarked' : ''}>
      <LeftContainer>
        <MarkImg src={isMarked ? pinFilledImg : pinImg} />
        <Title>{title}</Title>
        <TargetDate>{targetDate}</TargetDate>
      </LeftContainer>
      <DDay>{dDay}</DDay>
      {/* D-Day가 오늘 이전이면 X */}
    </Root>
  )
}
