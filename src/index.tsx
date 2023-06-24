import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Main from './page/Main/index'
import { Globals, TodoItemList, TodoItems } from './types'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const reducer = (state: Globals = { isRunning: false, todos: [], isStudying: false }, action: any): Globals => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.value] }
    case 'DEL_TODO': {
      //묶어주지 않으면 eslint lexical 오류 발생
      const newTodos: TodoItemList = state.todos.filter((todo: TodoItems) => todo.id !== action.id)
      const newState: Globals = { ...state, todos: newTodos }
      return newState
    }
    case 'UPDATE_TODO': {
      const updateTodos: TodoItemList = state.todos.map((todo) => {
        if (todo.id === action.id) return action.value
        else return todo
      })
      return { ...state, todos: updateTodos }
    }
    case 'RUN_TIMER':
      return { ...state, isRunning: true }
    case 'STOP_TIMER':
      return { ...state, isRunning: false }
    case 'EXERCISE':
      return { ...state, isStudying: false }
    case 'STUDY':
      return { ...state, isStudying: true }
    case 'UPDATE_COLOR':
      return { ...state, todos: [...state.todos, action.color] }

    default:
      return state
  }
}

const store = createStore<Globals, any, any, any>(reducer) //나중에 고치기

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
