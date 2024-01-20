import { RemoveSubjectRequestProps, removeSubject } from 'api/subject/removeSubject'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

type DeleteSubjectMutationProps = RemoveSubjectRequestProps

/**타이머 과목 삭제 */
function useDeleteSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateDeleteSubject } = useMutation(
    ({ subjectId }: DeleteSubjectMutationProps) =>
      removeSubject({
        subjectId,
      }),
    {
      onMutate: ({ subjectId }) => {
        const prevData = queryClient.getQueryData('todoList')
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.filter((todo) => subjectId !== todo.subjectId)
        )
        return { prevData }
      },
      onSuccess: () => {
        console.log('delete success')
      },
      onError: (err, vars, context) => {
        console.error(err)
        queryClient.setQueryData('todoList', context.prevData)
      },
    }
  )
  return mutateDeleteSubject
}

export default useDeleteSubjectMutation
