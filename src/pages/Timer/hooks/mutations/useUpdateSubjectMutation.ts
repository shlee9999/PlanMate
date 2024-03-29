import { UpdateSubjectRequestProps, updateSubject } from 'api/subject/updateSubject'
import { QueryKeys } from 'types'
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
        queryClient.invalidateQueries([QueryKeys.todoList])
        queryClient.invalidateQueries([QueryKeys.todayStats])
      },
    }
  )
  return mutateUpdateSubject
}

export default useUpdateSubjectMutation
