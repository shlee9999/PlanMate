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
        const prevData = queryClient.getQueryData(['todoList'])
        queryClient.setQueryData<StudyTimeResponseProps>(['todoList'], (prev) =>
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
          ['todoList'],
          prevData.concat({
            ...data,
            studyTimeHours: 0,
            studyTimeMinutes: 0,
            studyTimeSeconds: 0,
          })
        )
      },
      onError: (err, data, context) => {
        queryClient.setQueryData(['todoList'], context.prevData)
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
