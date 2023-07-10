import { TodoPlans } from 'types'

const ADD_TODO = 'todos/ADD_TODO' as const
const REMOVE_TODO = 'todos/REMOVE_TODO' as const
const UPDATE_TODO = 'todos/UPDATE_TODO' as const

//toplan
export const addPlan = (todo: TodoPlans) => ({
  type: ADD_TODO,
  payload: todo,
})

export const removePlan = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const updatePlan = (todo: TodoPlans, id: string) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, id: id },
})

//toplan
type ToplansAction = ReturnType<typeof addPlan> | ReturnType<typeof removePlan> | ReturnType<typeof updatePlan>

type ToplansState = TodoPlans[]

const IntialPlanState: ToplansState = []

function todoplans(state: ToplansState = IntialPlanState, action: ToplansAction) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload)

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case UPDATE_TODO: {
      return state.map((todo) => (todo.id === action.payload.id ? action.payload.todo : todo))
    }
    default:
      return state
  }
}

export default todoplans
