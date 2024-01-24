import { UpdateSubjectRequestProps, updateSubject } from 'api/subject/updateSubject'
import { useMutation, useQueryClient } from 'react-query'

type UpdateSubjectProps = UpdateSubjectRequestProps

/**타이머 과목 시간 갱신 - 일시정지 시 */
function useUpdateSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateUpdateSubject } = useMutation(
    ({ endAt, startAt, subjectId }: UpdateSubjectProps) =>
      updateSubject({
        endAt,
        startAt,
        subjectId,
      }),
    {
      onSuccess: () => {
        console.log('update success')
      },
      onSettled: () => {
        queryClient.invalidateQueries(['timeInfo'])
      },
    }
  )
  return mutateUpdateSubject
}

export default useUpdateSubjectMutation
