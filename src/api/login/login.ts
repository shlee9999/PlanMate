import { axiosPOST } from 'api/common/commonAxios'

export type LoginRequestProps = {
  email: string
  picture: string
  name: string
}

export type LoginResponseProps = {
  memberId: number
  nickname: string
  profileImage: string
  email: string
  accessToken: string
  refreshToken: string
}

export const login = ({ email, picture, name }: LoginRequestProps) => {
  return axiosPOST(`/login/google/token`, { email, picture, name })
}
