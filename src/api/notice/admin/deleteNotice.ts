import { axiosDELETE } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type DeleteNoticeRequestProps = Pick<PostType, 'noticeId'>

export type DeleteNoticeResponseProps = boolean

export const deleteNotice = ({ noticeId }: DeleteNoticeRequestProps) => axiosDELETE('/admin/notice/check', { noticeId })
