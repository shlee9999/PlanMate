import { Header } from 'components/'
import {
  ErrorPage,
  MyPage,
  TimerPage,
  StatsPage,
  PlannerPage,
  ExamInfoPage,
  BulletinPage,
  ExamInfoDetailPage,
  NoticePage,
  LoginPage,
} from 'pages'
import { FindAllNoticeResponseProps, findAllNotice } from 'api/notice/findAllNotice'
import App from 'App'

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
            <Header />
            <LoginPage />
          </>
        ),
      },
    ],
  },
]
