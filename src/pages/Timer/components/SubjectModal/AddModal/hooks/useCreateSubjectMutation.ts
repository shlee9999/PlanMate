import { createSubject } from 'api/subject/createSubject'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

function useCreateSubjectMutation({
  colorHex,
  name,
  onSuccess,
}: {
  colorHex: string
  name: string
  onSuccess: () => void
}) {
  const queryClient = useQueryClient()
  const { mutate: mutateCreateSubject } = useMutation(
    () =>
      createSubject({
        colorHex,
        name,
      }),
    {
      onSuccess: () => {
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.concat({
            subjectId: new Date().getTime(),
            name,
            colorHex,
            time: 0,
          })
        )
        console.log('success add')
        onSuccess()
      },
      onError: (err, variables, context) => {
        console.error('에러', err)
      },
      onSettled: () => queryClient.invalidateQueries('todoList'),
    }
  )
  return mutateCreateSubject
}

export default useCreateSubjectMutation
