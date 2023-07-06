import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ExamInfoTab } from 'tabs/ExamInfoTab'
import { BulletinTab } from 'tabs/ExamInfoTab/BulletinTab'
import PlannerTab from 'tabs/PlannerTab'
import StatsTab from 'tabs/StatsTab'
import { TimerTab } from 'tabs/TimerTab'

export const routerInfo = [
  {
    path: '/',
    element: (
      <Root>
        <HeaderSection />
        <Outlet />
      </Root>
    ),
    children: [
      {
        path: 'timer',
        element: <TimerTab />,
      },
      {
        path: 'stats',
        element: <StatsTab />,
      },
      {
        path: 'planner',
        element: <PlannerTab />,
      },
      {
        path: 'examinfo',
        element: <ExamInfoTab />,
        // loader: () => {}, //비동기 처리 등
      },
      {
        path: 'examinfo/post',
        element: <BulletinTab />,
      },
      {
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
]
