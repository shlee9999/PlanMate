import { axiosPOST } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type EditNoticeRequestProps = Pick<PostType, 'content' | 'noticeId' | 'title'>

export type EditNoticeResponseProps = boolean

export const editNotice = ({ noticeId, content, title }: EditNoticeRequestProps) =>
  axiosPOST('/admin/notice/edit', { noticeId, content, title })
