import { CreateSubjectRequestProps, createSubject } from 'api/subject/createSubject'
import { StudyTimeResponseProps } from 'api/subject/studyTime'
import { QueryKeyType } from 'enums'
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
        const prevData = queryClient.getQueryData([QueryKeyType.todoList])
        queryClient.setQueryData<StudyTimeResponseProps>([QueryKeyType.todoList], (prev) =>
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
      onSuccess: (data, vars, context) => {
        console.log(data)
        const prevData = context.prevData as StudyTimeResponseProps
        queryClient.setQueryData(
          [QueryKeyType.todoList],
          prevData.concat({
            ...data,
            studyTimeHours: 0,
            studyTimeMinutes: 0,
            studyTimeSeconds: 0,
          })
        )
      },
      onError: (err, data, context) => {
        queryClient.setQueryData([QueryKeyType.todoList], context.prevData)
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['timeInfo'])
      },
    }
  )
  return mutateCreateSubject
}

export default useCreateSubjectMutation
