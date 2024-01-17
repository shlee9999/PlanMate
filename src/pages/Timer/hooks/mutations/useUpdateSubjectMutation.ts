import { UpdateSubjectRequestProps, updateSubject } from 'api/subject/updateSubject'
import { useMutation } from 'react-query'

function useUpdateSubjectMutation() {
  const { mutate: mutateUpdateSubject } = useMutation(
    ({ endAt, startAt, subjectId }: UpdateSubjectRequestProps) =>
      updateSubject({
        endAt,
        startAt,
        subjectId,
      }),
    {
      onSuccess: () => {
        console.log('update success')
      },
    }
  )
  return mutateUpdateSubject
}

export default useUpdateSubjectMutation
