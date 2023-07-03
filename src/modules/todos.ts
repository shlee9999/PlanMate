import { TodoItemList, TodoItems } from 'types'

const ADD_TODO = 'todos/ADD_TODO' as const
const REMOVE_TODO = 'todos/REMOVE_TODO' as const
const UPDATE_TODO = 'todos/UPDATE_TODO' as const

export const addTodo = (todo: TodoItems) => ({
  type: ADD_TODO,
  payload: todo,
})

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const updateTodo = (todo: TodoItems, id: string) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, id: id },
})

type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo> | ReturnType<typeof updateTodo>

type TodosState = TodoItems[]

const InitialState: TodosState = []

function todos(state: TodosState = InitialState, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload)

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case UPDATE_TODO:
      const updateTodos: TodoItemList = state.map((todo) => {
        if (todo.id === action.payload.id) return action.payload.todo
        else return todo
      })
      return { ...state, todos: updateTodos }

    default:
      return state
  }
}

export default todos
