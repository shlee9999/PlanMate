import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import MainSection from './page/MainSection/'
import { HeaderSection } from 'page/HeaderSection'
import rootReducer from 'modules'
const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HeaderSection />
    <MainSection />
  </Provider>
)
