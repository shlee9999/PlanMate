import { CreateSubjectRequestProps, createSubject } from 'api/subject/createSubject'
import { StudyTimeResponseProps } from 'api/subject/studyTime'
import { useMutation, useQueryClient } from 'react-query'

type CreateSubjectMutationProps = CreateSubjectRequestProps

/**타이머 과목 생성 */
function useCreateSubjectMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateCreateSubject } = useMutation(
    ({ colorHex, name }: CreateSubjectMutationProps) =>
      createSubject({
        colorHex,
        name,
      }),
    {
      onMutate: ({ colorHex, name }) => {
        const prevData = queryClient.getQueryData('todoList')
        queryClient.setQueryData<StudyTimeResponseProps>('todoList', (prev) =>
          prev.concat({
            subjectId: new Date().getTime(),
            name,
            colorHex,
            studyTimeHours: 0,
            studyTimeMinutes: 0,
            studyTimeSeconds: 0,
          })
        )
        return { prevData }
      },
      onSuccess: () => {
        console.log('success add')
      },
      onError: (err) => {
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['todoList'])
        queryClient.invalidateQueries(['timeInfo'])
      },
    }
  )
  return mutateCreateSubject
}

export default useCreateSubjectMutation
