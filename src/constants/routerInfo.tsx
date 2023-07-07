import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ExamInfoPage } from 'pages/ExamInfo'
import { BulletinPage } from 'pages/ExamInfo/BulletinPage'
import { TimerPage } from 'pages/Timer'
import StatsPage from 'pages/Stats'
import PlannerPage from 'pages/Planner'
import { ExamInfoDetailPage } from 'pages/ExamInfo/ExamInfoDetail'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'
import { checkPost } from 'api/post/checkPost'

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
        path: '/timer',
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

        loader: async (): Promise<ResponsePostType[]> => {
          return (await findAll({
            pages: 0,
          })) as ResponsePostType[]
        }, //비동기 처리 등
      },
      {
        path: 'examinfo/post',
        element: <BulletinPage />,
      },
      {
        path: 'examinfo/detail/:postId',
        element: <ExamInfoDetailPage />,
        loader: async ({ params }: any): Promise<string> => {
          return (await checkPost({
            postId: +params.postId,
          })) as string
        }, //비동기 처리 등
      },
      {
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
]
