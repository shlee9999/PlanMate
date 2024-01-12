import { axiosGET } from 'api/common/commonAxios'

export type CheckUserInfoResponseProps = {
  authorities: string
  email: string
  loginType: number
  memberId: number
  memberName: string
  profile: string
}

export const checkUserInfo = () => {
  return axiosGET('/member/info')
}
