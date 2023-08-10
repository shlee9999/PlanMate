import { axiosGET } from 'api/common/commonAxios'

export type GoogleTokenRequestProps = {
  id: number
}

export type GoogleTokenResponseProps = {
  accessToken: string
  email: string
  id: number
  img: string
  name: string
  refreshToken: string
}

export const googleToken = (req: GoogleTokenRequestProps) => {
  return axiosGET('/info/auth', req)
}
