import { IAppointment } from 'types'

const ADD_APPOINT = 'appointments/ADD_APPOINT' as const
const REMOVE_APPOINT = 'appointments/REMOVE_APPOINT' as const
const UPDATE_APPOINT = 'appointments/UPDATE_APPOINT' as const

//Appoint
export const addAppoint = (appoint: IAppointment) => ({
  type: ADD_APPOINT,
  payload: appoint,
})

export const removeAppoint = (startDate: Date) => ({
  type: REMOVE_APPOINT,
  payload: startDate,
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
    startDate: new Date('2024-01-04T08:00:00.000'),
    endDate: new Date('2024-01-04T11:00:00.000'),
    bgColor: 'tomato',
  },
  {
    text: '프로젝트',
    startDate: new Date('2024-01-05T10:00:00.000'),
    endDate: new Date('2024-01-05T11:30:00.000'),
    bgColor: 'teal',
  },
]

function appointments(state: IAppointment[] = IntialAppointState, action: AppointAction) {
  switch (action.type) {
    case ADD_APPOINT:
      return state.concat(action.payload)

    case REMOVE_APPOINT:
      return state.filter((appoint) => appoint.startDate !== action.payload)

    case UPDATE_APPOINT: {
      return state.map((appoint) =>
        appoint.startDate === action.payload.appointment.startDate ? action.payload.appointment : appoint
      )
    }
    default:
      return state
  }
}

export default appointments
