import { FC } from 'react'
import * as s from './styled'
import { useSelectedData } from 'pages/Stats/hooks'

export const StatsContainerHeader: FC = () => {
  const { selectedDate } = useSelectedData()
  const { year, month, date } = selectedDate
  return (
    <s.Header>
      {year}년 {month}월 {date}일
    </s.Header>
  )
}
