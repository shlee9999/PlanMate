const CHANGE_USERAUTHINFO = 'timer/CHANGE_TAB' as const

export const changeuserAuthInfo = (userAuthInfo: userAuthInfoState) => ({
  type: CHANGE_USERAUTHINFO,
  payload: userAuthInfo,
})

type userAuthInfoAction = ReturnType<typeof changeuserAuthInfo>

type userAuthInfoState = {
  accessToken: string | null
  email: string | null
  id: number | null
  img: string | null
  name: string | null
  refreshToken: string | null
}

const InitialState: userAuthInfoState = JSON.parse(localStorage.getItem('userAuthInfo')) || {
  accessToken: null,
  email: null,
  id: null,
  img: null,
  name: null,
  refreshToken: null,
}

function userAuthInfo(state: userAuthInfoState = InitialState, action: userAuthInfoAction) {
  switch (action.type) {
    case CHANGE_USERAUTHINFO:
      return action.payload

    default:
      return state
  }
}

export default userAuthInfo
