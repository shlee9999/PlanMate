import { FC } from 'react'
import * as s from './styled'
import { CenterSpinner } from 'commonStyled'
import { StatsContainerPages } from 'types'
import { Calendar, StatsContainer } from 'components'
import { useMainContainer } from './useMainContainer'

export const MainContainer: FC = () => {
  const { isLoading, selectedDate, setSelectedDate, selectedDateData, selectedMonthStats } = useMainContainer()
  return (
    <s.MainContainer>
      <s.LeftInfoBox left>
        <Calendar
          legend
          selectedDateProps={selectedDate}
          setSelectedDate={setSelectedDate}
          dataSource={selectedMonthStats}
          blockFuture
          todayButton
        />
      </s.LeftInfoBox>
      <s.RightInfoBox right>
        {isLoading ? (
          <CenterSpinner>Loading...</CenterSpinner>
        ) : (
          <StatsContainer selectedDate={selectedDate} dataSource={selectedDateData} type={StatsContainerPages.stats} />
        )}
      </s.RightInfoBox>
    </s.MainContainer>
  )
}
