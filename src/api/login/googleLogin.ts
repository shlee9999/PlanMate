import { axiosGET } from 'api/common/commonAxios'

export type GoogleLoginResponseProps = {
  id: number
  name: string
  img: string
  email: string
  accessToken: string
  refreshToken: string
}

export const googleLogin = () => {
  return axiosGET('/login/google')
}
