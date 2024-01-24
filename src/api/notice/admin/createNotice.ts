import { axiosPOST } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type CreateNoticeRequestProps = Pick<PostType, 'content' | 'title'>

export type CreateNoticeResponseProps = boolean

export const createNotice = ({ content, title }: CreateNoticeRequestProps) =>
  axiosPOST('admin/notice', { content, title })
