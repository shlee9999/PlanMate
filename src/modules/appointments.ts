import { colorList } from 'constants/color'
import { IAppointment } from 'types'

const ADD_APPOINT = 'appointments/ADD_APPOINT' as const
const REMOVE_APPOINT = 'appointments/REMOVE_APPOINT' as const
const UPDATE_APPOINT = 'appointments/UPDATE_APPOINT' as const

//Appoint
export const addAppoint = (appoint: IAppointment) => ({
  type: ADD_APPOINT,
  payload: appoint,
})

export const removeAppoint = (id: number) => ({
  type: REMOVE_APPOINT,
  payload: id,
})

export const updateAppoint = (appointment: IAppointment) => ({
  type: UPDATE_APPOINT,
  payload: { appointment: appointment },
})

//toAppoint
type AppointAction = ReturnType<typeof addAppoint> | ReturnType<typeof removeAppoint> | ReturnType<typeof updateAppoint>

const IntialAppointState: IAppointment[] = [
  {
    text: '기타 연습',
    startDate: new Date(2024, 0, 7, 5),
    endDate: new Date(2024, 0, 7, 24),
    bgColor: colorList[0][5],
    id: 0,
  },
  {
    text: '프로젝트',
    startDate: new Date(2024, 0, 8, 10),
    endDate: new Date(2024, 0, 8, 15),
    bgColor: colorList[2][2],
    id: 1,
  },
]

function appointments(state: IAppointment[] = IntialAppointState, action: AppointAction) {
  switch (action.type) {
    case ADD_APPOINT:
      return state.concat(action.payload)

    case REMOVE_APPOINT:
      return state.filter((appoint) => appoint.id !== action.payload)

    case UPDATE_APPOINT: {
      return state.map((appoint) =>
        appoint.id === action.payload.appointment.id ? action.payload.appointment : appoint
      )
    }
    default:
      return state
  }
}

export default appointments
