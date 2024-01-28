import { EditSubjectRequestProps, editSubject } from 'api/subject/editSubject'
import { QueryKeyType } from 'enums'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

type EditSubjectMutationProps = EditSubjectRequestProps

/**타이머 과목 수정 */
function useEditSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateEditSubjectMutation } = useMutation(
    ({ colorHex, name, subjectId }: EditSubjectMutationProps) =>
      editSubject({
        colorHex,
        name,
        subjectId,
      }),
    {
      onMutate: ({ subjectId, colorHex, name }) => {
        const prevData = queryClient.getQueryData([QueryKeyType.todoList])
        queryClient.setQueryData<TodoItemType[]>([QueryKeyType.todoList], (prev) =>
          prev.map((todo) => (todo.subjectId === subjectId ? { ...todo, colorHex, name } : todo))
        )
        return { prevData }
      },
      onSuccess: () => console.log('success edit'),
      onError: (err, vars, context) => {
        console.error(err)
        queryClient.setQueryData([QueryKeyType.todoList], context.prevData)
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeyType.timeInfo])
      },
    }
  )
  return mutateEditSubjectMutation
}

export default useEditSubjectMutation
