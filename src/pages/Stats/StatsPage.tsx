import React, { useState } from 'react'
import { dateUtils } from 'utils'
import { useQuery } from 'react-query'
import { ResponseStats } from 'api//types'
import { checkTodayStats } from 'api/stats/checkTodayStats'
import { CenterSpinner } from 'commonStyled'
import { InfoContainer } from './components'
import { checkStatsMonthly } from 'api/stats/checkStatsMonthly'
import { DateProps } from 'types'
import * as s from './styled'
import { defaultStats } from 'constants/defaultStats'

export const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>(() => {
    const { year, month, date } = dateUtils.getDateProps(new Date())
    return { year, month, date }
  })
  const { data: todayStats, isLoading: todayLoading } = useQuery<ResponseStats>(['todayStats'], () => checkTodayStats())
  const { data: selectedMonthStats, isLoading: isSelectedLoading } = useQuery<ResponseStats[]>(
    ['timeInfo', selectedDate.month],
    () =>
      checkStatsMonthly({
        yearMonth: dateUtils.getYYYYMMDD({ ...selectedDate, month: selectedDate.month + 1 }),
      })
  )
  const isToday = dateUtils.isEqual(selectedDate, dateUtils.getDateProps(new Date()))
  const isLoading = isSelectedLoading || todayLoading
  const selectedDateData: ResponseStats = isLoading
    ? defaultStats
    : isToday
    ? todayStats
    : selectedMonthStats[selectedDate.date - 1]

  return (
    <s.Root>
      <s.HeaderContainer>
        <s.HeaderContentWrapper>
          <s.UserName>메이트 </s.UserName>
          <s.PageDescription>님의 공부량을 한눈에 볼 수 있어요!</s.PageDescription>
        </s.HeaderContentWrapper>
        <s.PageName>통계 📊</s.PageName>
      </s.HeaderContainer>
      <s.HeaderDividingLine />
      <s.Container>
        <s.Title>공부량 한 눈에 보기</s.Title>
        <s.StatsContainer>
          <s.LeftInfoBox left>
            <s.StatsCalendar
              legend
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              dataSource={selectedMonthStats}
              blockFuture
            />
          </s.LeftInfoBox>
          <s.RightInfoBox right>
            {isLoading ? (
              <CenterSpinner>Loading...</CenterSpinner>
            ) : (
              <InfoContainer selectedDate={selectedDate} dataSource={selectedDateData} />
            )}
          </s.RightInfoBox>
        </s.StatsContainer>
      </s.Container>
    </s.Root>
  )
}
