import { EditDdayRequestProps, editSchedule } from 'api/dday/editDday'
import { useQueryClient, useMutation } from 'react-query'

type UseEditScheduleMutationProps = EditDdayRequestProps & {
  callBack: () => void
}

/**D-Day 수정 */
function useEditScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title, dDayId }: UseEditScheduleMutationProps) => editSchedule({ targetDate, title, dDayId }),
    {
      onSuccess: (data, { callBack }) => {
        callBack()
        console.log('success')
      },
      onError: (err) => {
        console.error(err)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['dDayList'])
      },
    }
  )
  return mutate
}
export default useEditScheduleMutation
