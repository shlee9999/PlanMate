import { EditNoticeRequestProps, editNotice } from 'api/notice/admin/editNotice'
import { CheckNoticeResponseProps } from 'api/notice/checkNotice'
import { QueryKeys } from 'types'
import { useQueryClient, useMutation } from 'react-query'

type UseEditNoticeMutationProps = EditNoticeRequestProps & {
  mode: 'examinfo' | 'notice'
  callBack: () => void
}

/**게시물 수정 */
function useEditNoticeMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ content, noticeId, title }: UseEditNoticeMutationProps) => editNotice({ content, noticeId, title }),
    {
      onMutate: ({ content, noticeId, title, mode }) => {
        const prevData = queryClient.getQueryData<CheckNoticeResponseProps>([QueryKeys.detailData, mode, noticeId])
        queryClient.setQueryData<CheckNoticeResponseProps>([QueryKeys.detailData, mode, noticeId], (prev) => ({
          ...prev,
          content,
          noticeId,
          title,
        }))
        return { prevData }
      },
      onSuccess: () => {
        console.log('success')
      },
      onError: (err, { noticeId, mode }, context) => {
        console.error(err)
        queryClient.setQueryData<CheckNoticeResponseProps>([QueryKeys.detailData, mode, noticeId], context.prevData)
      },
    }
  )
  return mutate
}
export default useEditNoticeMutation
