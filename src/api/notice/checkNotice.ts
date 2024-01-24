import { axiosGET } from 'api/common/commonAxios'
import { PostType, ResponseNoticeType } from 'api/types'

export type CheckNoticeRequestProps = Pick<PostType, 'noticeId'>

export type CheckNoticeResponseProps = ResponseNoticeType

export const checkNotice = ({ noticeId }: CheckNoticeRequestProps) => axiosGET('/notice/check', { noticeId })
