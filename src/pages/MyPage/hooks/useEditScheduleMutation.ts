import { EditScheduleRequestProps, editSchedule } from 'api/schedule/editSchedule'
import { useQueryClient, useMutation } from 'react-query'

type UseEditScheduleMutationProps = EditScheduleRequestProps

/**D-Day 수정 */
function useEditScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title, scheduleId }: UseEditScheduleMutationProps) =>
      editSchedule({ targetDate, title, scheduleId }),
    {
      onSuccess: () => {
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
