import { axiosGET } from 'api/common/commonAxios'
import { PostType, ResponsePostType } from 'api/types'

export type CheckNoticeRequestProps = Pick<PostType, 'noticeId'>

export type CheckNoticeResponseProps = Omit<ResponsePostType, 'postTagList'>

export const checkNotice = ({ noticeId }: CheckNoticeRequestProps) => axiosGET('', { noticeId })
