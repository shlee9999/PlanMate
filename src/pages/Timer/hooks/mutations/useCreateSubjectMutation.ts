import { createSubject } from 'api/subject/createSubject'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

function useCreateSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateCreateSubject } = useMutation(
    ({ colorHex, name }: { colorHex: string; name: string; callBack: () => void }) =>
      createSubject({
        colorHex,
        name,
      }),
    {
      onMutate: ({ colorHex, name, callBack }) => {
        const prevData = queryClient.getQueryData('todoList')
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.concat({
            subjectId: new Date().getTime(),
            name,
            colorHex,
            time: 0,
          })
        )
        callBack()
        return { prevData }
      },
      onSuccess: () => {
        console.log('success add')
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData('todoList', context.prevData)
        console.error(err)
      },
    }
  )
  return mutateCreateSubject
}

export default useCreateSubjectMutation
