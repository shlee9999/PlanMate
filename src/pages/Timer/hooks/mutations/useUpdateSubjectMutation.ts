import { UpdateSubjectRequestProps, updateSubject } from 'api/subject/updateSubject'
import { useMutation } from 'react-query'

function useUpdateSubjectMutation({
  endAt,
  startAt,
  subjectId,
  onSuccess: cb,
}: UpdateSubjectRequestProps & { onSuccess: () => void }) {
  const { mutate: mutateUpdateSubject } = useMutation(
    () =>
      updateSubject({
        endAt,
        startAt,
        subjectId,
      }),
    {
      onSuccess: () => {
        console.log('update success')
        cb()
      },
    }
  )
  return mutateUpdateSubject
}

export default useUpdateSubjectMutation
