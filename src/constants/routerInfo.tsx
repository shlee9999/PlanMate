import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ExamInfoPage } from 'pages/ExamInfo'
import { BulletinPage } from 'pages/ExamInfo/BulletinTab'
import { TimerPage } from 'pages/Timer'
import StatsPage from 'pages/Stats'
import PlannerPage from 'pages/Planner'

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
        path: '/',
        element: <TimerPage />,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
      {
        path: 'planner',
        element: <PlannerPage />,
      },
      {
        path: 'examinfo',
        element: <ExamInfoPage />,
        // loader: () => {}, //비동기 처리 등
      },
      {
        path: 'examinfo/post',
        element: <BulletinPage />,
      },
      {
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
]
