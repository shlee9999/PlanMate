import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import rootReducer from 'modules'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TimerTab } from 'tabs/TimerTab'
import StatsTab from 'tabs/StatsTab'
import PlannerTab from 'tabs/PlannerTab'
import { ExamInfoTab } from 'tabs/ExamInfoTab'
import { Root } from 'styled'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
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
        path: '*',
        element: <>없는 페이지</>,
      },
    ],
  },
])
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
