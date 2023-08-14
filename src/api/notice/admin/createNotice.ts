import { axiosPOST } from 'api/common/commonAxios'

export type CreateNoticeRequestProps = {
  content: string
  title: string
}

export type CreateNoticeResponseProps = boolean

export const createNotice = (req: CreateNoticeRequestProps) => {
  return axiosPOST('admin/notice', req)
}
