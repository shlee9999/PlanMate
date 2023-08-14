import { axiosDELETE } from 'api/common/commonAxios'

export type DeleteNoticeRequestProps = {
  noticeId: number
}

export type DeleteNoticeResponseProps = boolean

export const deleteNotice = (req: DeleteNoticeRequestProps) => {
  return axiosDELETE('', req)
}
