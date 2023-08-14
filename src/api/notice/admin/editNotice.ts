import { axiosPOST } from 'api/common/commonAxios'

export type EditNoticeRequestProps = {
  content: string
  noticeId: number
  title: string
}

export type EditNoticeResponseProps = boolean

export const editNotice = (req: EditNoticeRequestProps) => {
  return axiosPOST('/admin/notice/edit', req)
}
