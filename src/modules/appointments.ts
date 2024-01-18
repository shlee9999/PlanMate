import { colorList } from 'constants/color'
import { PlannerType } from 'types'

const ADD_APPOINT = 'appointments/ADD_APPOINT' as const
const REMOVE_APPOINT = 'appointments/REMOVE_APPOINT' as const
const UPDATE_APPOINT = 'appointments/UPDATE_APPOINT' as const
const INITIALIZE_APPOINT = 'appointments/INITIALIZE_APPOINT' as const
//Appoint
export const addAppoint = (appoint: PlannerType) => ({
  type: ADD_APPOINT,
  payload: appoint,
})

export const removeAppoint = (id: number) => ({
  type: REMOVE_APPOINT,
  payload: id,
})

export const updateAppoint = (appointment: PlannerType) => ({
  type: UPDATE_APPOINT,
  payload: { appointment: appointment },
})
export const initializeAppoint = (appointList: PlannerType[]) => ({
  type: INITIALIZE_APPOINT,
  payload: { appointList: appointList },
})

//Appoint
type AppointAction =
  | ReturnType<typeof addAppoint>
  | ReturnType<typeof removeAppoint>
  | ReturnType<typeof updateAppoint>
  | ReturnType<typeof initializeAppoint>

const IntialAppointState: PlannerType[] = []

function appointments(state: PlannerType[] = IntialAppointState, action: AppointAction) {
  switch (action.type) {
    case ADD_APPOINT:
      return state.concat(action.payload)

    case REMOVE_APPOINT:
      return state.filter((appoint) => appoint.plannerId !== action.payload)

    case UPDATE_APPOINT: {
      return state.map((appoint) =>
        appoint.plannerId === action.payload.appointment.plannerId ? action.payload.appointment : appoint
      )
    }
    case INITIALIZE_APPOINT:
      return action.payload.appointList
    default:
      return state
  }
}

export default appointments
