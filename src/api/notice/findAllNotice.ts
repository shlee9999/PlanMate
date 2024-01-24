import { axiosGET } from 'api/common/commonAxios'
import { PostType } from 'api/types'

export type FindAllNoticeRequestProps = Pick<PostType, 'pages'>

export type FindAllNoticeResponseProps = Pick<PostType, 'noticeDtoList' | 'totalPages'>

export const findAllNotice = ({ pages }: FindAllNoticeRequestProps) => axiosGET('/notice', { pages })
