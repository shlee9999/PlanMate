import { RemoveSubjectRequestProps, deleteSubject } from 'api/subject/deleteSubject'
import { QueryKeyType } from 'enums'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

type DeleteSubjectMutationProps = RemoveSubjectRequestProps

/**타이머 과목 삭제 */
function useDeleteSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateDeleteSubject } = useMutation(
    ({ subjectId }: DeleteSubjectMutationProps) =>
      deleteSubject({
        subjectId,
      }),
    {
      onMutate: ({ subjectId }) => {
        const prevData = queryClient.getQueryData([QueryKeyType.todoList])
        queryClient.setQueryData<TodoItemType[]>([QueryKeyType.todoList], (prev) =>
          prev.filter((todo) => subjectId !== todo.subjectId)
        )

        return { prevData }
      },
      onSuccess: () => {
        console.log('delete success')
      },
      onError: (err, vars, context) => {
        console.error(err)
        queryClient.setQueryData([QueryKeyType.todoList], context.prevData)
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeyType.timeInfo])
      },
    }
  )
  return mutateDeleteSubject
}

export default useDeleteSubjectMutation
