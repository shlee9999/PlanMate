import { DeleteNoticeRequestProps, deleteNotice } from 'api/notice/admin/deleteNotice'
import { useMutation } from 'react-query'

type UseDeleteNoticeMutationProps = DeleteNoticeRequestProps & {
  callBack: () => void
}

/**공지사항 삭제 */
function useDeleteNoticeMutation() {
  const { mutate } = useMutation(({ noticeId }: UseDeleteNoticeMutationProps) => deleteNotice({ noticeId }), {
    onSuccess: (data, { callBack }) => {
      callBack()
      console.log('success')
    },
    onError: (err) => {
      console.error(err)
    },
  })
  return mutate
}
export default useDeleteNoticeMutation
