import { ExamInfoTab } from 'tabs/ExamInfoTab'
import PlannerTab from 'tabs/PlannerTab'
import StatsTab from 'tabs/StatsTab'
import { TimerTab } from 'tabs/TimerTab'
import { TabInfo } from 'types'

export const tabList: Array<TabInfo> = [
  { title: '타이머', component: <TimerTab /> },
  {
    title: '통계',
    component: <StatsTab />,
  },
  {
    title: '플래너',
    component: <PlannerTab />,
  },
  {
    title: '수험정보',
    component: <ExamInfoTab />,
  },
]
