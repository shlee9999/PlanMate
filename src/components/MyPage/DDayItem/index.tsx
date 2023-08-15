import { FC } from 'react'
import { Date as TargetDate, MarkImg, Root, Title, DDay, LeftContainer } from './styled'
import pinImg from 'assets/images/pin.png'
import pinFilledImg from 'assets/images/pin_fill.png'

type DDayItemProps = {
  id: number
  title: string
  targetDate: string
  isFixed: boolean
  fixDDay: () => void
}

export const DDayItem: FC<DDayItemProps> = ({ title, targetDate, isFixed, fixDDay }) => {
  function daysUntil() {
    const specificDate = new Date(targetDate)
    const today = new Date()
    specificDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    const differenceInTime = specificDate.getTime() - today.getTime()
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)
    return differenceInDays
  }
  const dDay = daysUntil()
  const getWeekDay = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    const split = targetDate.split('-')
    const date = new Date(+split[0], +split[1] - 1, +split[2])
    return '(' + days[date.getDay()] + ')'
  }
  if (dDay < 0) return null
  return (
    <Root className={isFixed ? 'isFixed' : ''}>
      <LeftContainer>
        <MarkImg src={isFixed ? pinFilledImg : pinImg} onClick={fixDDay} />
        <Title>{title}</Title>
        <TargetDate>{targetDate.replaceAll('-', '. ') + ' ' + getWeekDay()}</TargetDate>
      </LeftContainer>
      <DDay>{dDay}</DDay>
    </Root>
  )
}
