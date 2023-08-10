import { axiosGET } from 'api/common/commonAxios'

export type LogoutResponseProps = string

export const logout = () => {
  return axiosGET('/logout/sign-out')
}
