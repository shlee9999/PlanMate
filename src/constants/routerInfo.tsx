import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ExamInfoPage } from 'pages/ExamInfo'
import { BulletinPage } from 'pages/ExamInfo/BulletinTab'
import { TimerPage } from 'pages/Timer'
import StatsPage from 'pages/Stats'
import PlannerPage from 'pages/Planner'
import { ExamInfoDetailPage } from 'pages/ExamInfo/ExamInfoDetail'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'

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

        loader: async (): Promise<ResponsePostType> => {
          return (await findAll({
            pages: 0,
          })) as ResponsePostType
        }, //비동기 처리 등
      },
      {
        path: 'examinfo/post',
        element: <BulletinPage />,
      },
      {
        path: 'examinfo/detail/:postId',
        element: <ExamInfoDetailPage />,
      },
      {
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
]
