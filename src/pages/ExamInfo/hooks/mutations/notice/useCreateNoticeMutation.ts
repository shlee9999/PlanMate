import { CreateNoticeRequestProps, createNotice } from 'api/notice/admin/createNotice'
import { useMutation } from 'react-query'

type UseCreateNoticeMutationProps = CreateNoticeRequestProps & {
  callBack: () => void
}

/**공지사항 생성 */
function useCreateNoticeMutation() {
  const { mutate } = useMutation(
    ({ content, title }: UseCreateNoticeMutationProps) => createNotice({ content, title }),
    {
      onSuccess: (data, { callBack }) => {
        callBack()
      },
      onError: (err) => {
        console.error(err, '관리자 권한이 없습니다.')
      },
    }
  )
  return mutate
}
export default useCreateNoticeMutation
