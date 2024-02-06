import { userAuthInfoType } from 'types'

const CHANGE_USER_AUTH_INFO = 'userAuthInfo/CHANGE_USER_AUTH_INFO' as const
const CHANGE_USER_AUTH_PROP = 'userAuthInfo/CHANGE_USER_AUTH_PROP' as const

export const changeUserAuthInfo = (userAuthInfo: userAuthInfoState) => ({
  type: CHANGE_USER_AUTH_INFO,
  payload: userAuthInfo,
})

export const changeUserAuthProp = (propName: keyof userAuthInfoState, value: any) => ({
  type: CHANGE_USER_AUTH_PROP,
  payload: { propName, value },
})

type userAuthInfoAction = ReturnType<typeof changeUserAuthInfo> | ReturnType<typeof changeUserAuthProp>

type userAuthInfoState = userAuthInfoType

const InitialState: userAuthInfoState = JSON.parse(localStorage.getItem('userAuthInfo')) || {
  memberId: null,
  nickname: null,
  profileImage: null,
  email: null,
  accessToken: null,
  refreshToken: null,
}

function userAuthInfo(state: userAuthInfoState = InitialState, action: userAuthInfoAction) {
  switch (action.type) {
    case CHANGE_USER_AUTH_INFO:
      return action.payload

    case CHANGE_USER_AUTH_PROP: {
      const { propName, value } = action.payload
      const newUserAuthInfo = { ...state, [propName]: value }
      localStorage.setItem('userAuthInfo', JSON.stringify(newUserAuthInfo))
      return newUserAuthInfo
    }

    default:
      return state
  }
}

export default userAuthInfo
