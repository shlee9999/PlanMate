import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import rootReducer from 'modules'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerInfo } from 'router'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter(routerInfo)
if (process.env.NODE_ENV === 'production') {
  console.log = () => undefined
  console.error = () => undefined
  console.debug = () => undefined
}
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
