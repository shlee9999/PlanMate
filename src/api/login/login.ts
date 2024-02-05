import { axiosPOST } from 'api/common/commonAxios'

export type LoginRequestProps = {
  code: string
}

export type LoginResponseProps = {
  memberId: number
  nickname: string
  profileImage: string
  email: string
  accessToken: string
  refreshToken: string
}

export const login = ({ code }: LoginRequestProps) => {
  return axiosPOST(`/login/google/token?code=${code}`)
}
