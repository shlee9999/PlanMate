import { axiosPOST } from 'api/common/commonAxios'

export type ChangeImageResponseProps = {
  authorities: string
  email: string
  loginType: number
  memberId: number
  memberName: string
  profile: string
}

export const changeImage = () => {
  return axiosPOST('/member/img')
}
