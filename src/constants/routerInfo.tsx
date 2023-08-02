import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { ExamInfoPage } from 'pages/ExamInfo/ExamInfoPage'
import { BulletinPage } from 'pages/ExamInfo/BulletinPage'
import { TimerPage } from 'pages/Timer'
import { StatsPage } from 'pages/Stats'
import { PlannerPage } from 'pages/Planner'
import { ExamInfoDetailPage } from 'pages/ExamInfo/ExamInfoDetail'
import { findAll } from 'api/post/find/findAll'
import { ResponsePostType } from 'api/common/commonType'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import sampleInfoList from 'constants/sampleInfoList.json'
import { FindAllCommentsResponseProps, findAllComments } from 'api/comment/findAll'
import { ExamInfoDetailDataType } from 'types'
import { FooterSection } from 'pages/CommonSections/FooterSection'
import { MyPage } from 'pages/MyPage'

export const routerInfo = [
  {
    path: '/',
    element: (
      <Root>
        <HeaderSection />
        <Outlet />
        <FooterSection />
      </Root>
    ),
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

        loader: async (): Promise<FindAllCommentsResponseProps> => {
          return (await findAll({
            pages: 0,
          })) as FindAllCommentsResponseProps
        }, //비동기 처리 등
      },
      {
        path: 'examinfo/post',
        element: <BulletinPage />,
      },
      {
        path: 'examinfo/detail/:postId',
        element: <ExamInfoDetailPage />,
        loader: async ({ params }: any): Promise<ExamInfoDetailDataType> => {
          const checkPostResult = (await checkPost({
            postId: +params.postId,
          })) as CheckPostResponseProps
          const findAllCommentsResult = (await findAllComments({
            pages: 0,
            postId: +params.postId,
          })) as FindAllCommentsResponseProps
          return {
            checkPostResult: checkPostResult,
            findAllCommentsResult: findAllCommentsResult,
          }
        },
      },
      {
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
]
