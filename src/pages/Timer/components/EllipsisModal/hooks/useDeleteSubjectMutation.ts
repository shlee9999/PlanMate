import { removeSubject } from 'api/subject/removeSubject'
import { useMutation, useQueryClient } from 'react-query'

function useDeleteSubjectMutation({ onSuccess }: { onSuccess: () => void }) {
  const queryClient = useQueryClient()
  const { mutate: mutateDeleteSubject } = useMutation(
    ({ subjectId }: { subjectId: number }) =>
      removeSubject({
        subjectId,
      }),
    {
      onSuccess: () => {
        console.log('delete success')
        onSuccess()
      },
      onError: (err) => console.error(err),
      onSettled: () => {
        queryClient.invalidateQueries('todoList')
      },
    }
  )
  return mutateDeleteSubject
}

export default useDeleteSubjectMutation
