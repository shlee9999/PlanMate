import { axiosGET } from 'api/common/commonAxios'

export type GoogleTokenRequestProps = {
  code: any
}

export type GoogleTokenResponseProps = {
  accessToken: string
  email: string
  id: 0
  img: string
  name: string
  refreshToken: string
}

export const googleToken = (req: GoogleTokenRequestProps) => {
  return axiosGET('/login/google/token', req)
}
