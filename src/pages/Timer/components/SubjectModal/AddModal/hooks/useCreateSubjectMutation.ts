import { createSubject } from 'api/subject/createSubject'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { TodoItemType } from 'types'

function useCreateSubjectMutation({ colorHex, name }: { colorHex: string; name: string }) {
  const queryClient = useQueryClient()
  const { mutate: mutateCreateSubject } = useMutation(
    () =>
      createSubject({
        colorHex,
        name,
      }),
    {
      onMutate: () => {
        const prevData = queryClient.getQueryData('todoList')
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.concat({
            subjectId: new Date().getTime(),
            name,
            colorHex,
            time: 0,
          })
        )
        return { prevData }
      },
      onSuccess: () => {
        console.log('success add')
      },
      onError: (err, variables, context) => {
        console.error(err)
      },
      onSettled: () => queryClient.invalidateQueries('todoList'),
    }
  )
  return mutateCreateSubject
}

export default useCreateSubjectMutation
