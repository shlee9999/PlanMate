import { defaultColor } from 'constants/color'
import { IAppointment } from 'types'

const UPDATE_INFO = 'selectedInfo/UPDATE_INFO' as const
const UPDATE_PROP = 'selectedInfo/UPDATE_PROP' as const

//Info
type ISelectedInfo = IAppointment

export const updateInfo = (Info: ISelectedInfo) => ({
  type: UPDATE_INFO,
  payload: Info,
})

export const updateProp = (propName: keyof ISelectedInfo, value: any) => ({
  type: UPDATE_PROP,
  payload: { propName, value },
})
//toInfo
type InfoAction = ReturnType<typeof updateInfo> | ReturnType<typeof updateProp>

const IntialInfoState: ISelectedInfo = {
  startDate: new Date(),
  endDate: new Date(),
  text: '',
  colorHex: defaultColor,
  id: 'tempid',
}

function selectedInfo(state: ISelectedInfo = IntialInfoState, action: InfoAction) {
  switch (action.type) {
    case UPDATE_INFO: {
      return { ...action.payload }
    }
    case UPDATE_PROP: {
      const { propName, value } = action.payload
      return { ...state, [propName]: value }
    }
    default:
      return state
  }
}

export default selectedInfo
