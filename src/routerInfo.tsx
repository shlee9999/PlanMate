import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { ExamInfoPage } from 'pages/ExamInfo/ExamInfoPage'
import { BulletinPage } from 'pages/ExamInfo/BulletinPage'
import { TimerPage } from 'pages/Timer'
import { StatsPage } from 'pages/Stats'
import { PlannerPage } from 'pages/Planner'
import { LoginPage } from 'pages/Login'
import { NoticePage } from 'pages/NoticePage'
import { ErrorPage } from 'pages/ErrorPage'
import { FindAllNoticeResponseProps, findAllNotice } from 'api/notice/findAllNotice'
import { ExamInfoDetailPage } from 'pages/ExamInfo/ExamInfoDetail'
import App from 'App'
import { MyPage } from 'pages/MyPage'

export const routerInfo = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      { path: 'mypage', element: <MyPage /> },
      {
        path: 'timer',
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
      },
      {
        path: 'examinfo/post',
        element: <BulletinPage mode={'examinfo'} />,
      },
      {
        path: 'examinfo/detail/:postId',
        element: <ExamInfoDetailPage mode={'examinfo'} />,
      },
      {
        path: 'notice',
        element: <NoticePage />,

        loader: async (): Promise<FindAllNoticeResponseProps> => {
          return (await findAllNotice({
            pages: 0,
          })) as FindAllNoticeResponseProps
        }, //비동기 처리 등
      },
      {
        path: 'notice/post',
        element: <BulletinPage mode={'notice'} />,
      },
      {
        path: 'notice/detail/:postId',
        element: <ExamInfoDetailPage mode="notice" />,
      },
      {
        path: 'suggest',
        element: <BulletinPage mode={'suggest'} />,
      },
      {
        path: 'login',
        element: (
          <>
            <HeaderSection />
            <LoginPage />
          </>
        ),
      },
    ],
  },
]
