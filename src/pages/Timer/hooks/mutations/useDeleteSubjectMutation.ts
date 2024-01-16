import { removeSubject } from 'api/subject/removeSubject'
import { useMutation, useQueryClient } from 'react-query'
import { TodoItemType } from 'types'

function useDeleteSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateDeleteSubject } = useMutation(
    ({ subjectId }: { subjectId: number; closeModal: () => void }) =>
      removeSubject({
        subjectId,
      }),
    {
      onMutate: async ({ closeModal }) => {
        const prevData = queryClient.getQueryData('todoList')
        closeModal()
        return { prevData }
      },
      onSuccess: (data, { subjectId }) => {
        queryClient.setQueryData<TodoItemType[]>('todoList', (prev) =>
          prev.filter((todo) => subjectId !== todo.subjectId)
        )
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
