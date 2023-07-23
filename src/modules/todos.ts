import { TodoItems } from 'types'

const ADD_TODO = 'todos/ADD_TODO' as const
const REMOVE_TODO = 'todos/REMOVE_TODO' as const
const UPDATE_TODO = 'todos/UPDATE_TODO' as const

export const addTodo = (todo: TodoItems) => ({
  type: ADD_TODO,
  payload: todo,
})

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const updateTodo = (todo: TodoItems, id: number) => ({
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
      return state.filter((todo) => todo.subjectId !== action.payload)

    case UPDATE_TODO: {
      return state.map((todo) => (todo.subjectId === action.payload.id ? action.payload.todo : todo))
    }
    default:
      return state
  }
}

export default todos
