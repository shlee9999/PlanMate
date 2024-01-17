import { editSubject } from 'api/subject/editSubject'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

type MutateProps = {
  colorHex: string
  name: string
  subjectId: number
}
function useEditSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateEditSubjectMutation } = useMutation(
    ({ colorHex, name, subjectId }: MutateProps) =>
      editSubject({
        colorHex,
        name,
        subjectId,
      }),
    {
      onMutate: ({ subjectId, colorHex, name }) => {
        const prevData = queryClient.getQueryData('todoList')
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.map((todo) => (todo.subjectId === subjectId ? { ...todo, colorHex, name } : todo))
        )
        return { prevData }
      },
      onSuccess: () => console.log('success edit'),
      onError: (err, vars, context) => {
        console.error(err)
        queryClient.setQueryData('todoList', context.prevData)
      },
    }
  )
  return mutateEditSubjectMutation
}

export default useEditSubjectMutation
