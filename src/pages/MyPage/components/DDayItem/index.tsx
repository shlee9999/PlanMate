import { FC, useContext } from 'react'
import { Date as TargetDate, Root, Title, DDay, LeftContainer, StyledPinIcon } from './styled'
import { daysUntil } from 'utils/helper'
import { PinIcon } from 'assets/SvgComponents'
import { ThemeContext } from 'styled-components'

type DDayItemProps = {
  id: number
  title: string
  targetDate: string
  isFixed: boolean
  fixDDay: () => void
}

export const DDayItem: FC<DDayItemProps> = ({ title, targetDate, isFixed, fixDDay }) => {
  const theme = useContext(ThemeContext)

  const dDay = daysUntil(targetDate)
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
        <StyledPinIcon fill={isFixed ? theme.primary.default : 'none'} onClick={fixDDay} />
        <Title>{title}</Title>
        <TargetDate>{targetDate.replaceAll('-', '. ') + ' ' + getWeekDay()}</TargetDate>
      </LeftContainer>
      <DDay>{dDay}</DDay>
    </Root>
  )
}
