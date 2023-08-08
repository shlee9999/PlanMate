import { axiosGET } from 'api/common/commonAxios'

export type GoogleTokenResponseProps = {
  accessToken: string
  email: string
  id: number
  img: string
  name: string
  refreshToken: string
}

export const googleToken = () => {
  return axiosGET('/info/auth')
}
