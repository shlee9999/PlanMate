import { IAppointment } from 'types'

const UPDATE_INFO = 'selectedInfo/UPDATE_INFO' as const

//Info
type ISelectedInfo = IAppointment

export const updateInfo = (Info: ISelectedInfo) => ({
  type: UPDATE_INFO,
  payload: Info,
})

//toInfo
type InfoAction = ReturnType<typeof updateInfo>

const IntialInfoState: ISelectedInfo = {
  startDate: new Date(),
  endDate: new Date(),
  text: '',
  bgColor: 'white',
}

function selectedInfo(state: ISelectedInfo = IntialInfoState, action: InfoAction) {
  switch (action.type) {
    case UPDATE_INFO: {
      return action.payload
    }
    default:
      return state
  }
}

export default selectedInfo
