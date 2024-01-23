import { DeleteDdayRequestProps, deleteSchedule } from 'api/dday/deleteDday'
import { DDayEntityType } from 'api/types/ScheduleType'
import { useQueryClient, useMutation } from 'react-query'

type UseDeleteScheduleMutationProps = DeleteDdayRequestProps

/**일정 삭제 */
function useDeleteScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ ddayId: scheduleId }: UseDeleteScheduleMutationProps) => deleteSchedule({ ddayId: scheduleId }),
    {
      onMutate: ({ ddayId: scheduleId }) => {
        const prevData = queryClient.getQueryData(['dDayList'])
        queryClient.setQueryData<DDayEntityType[]>('dDayList', (prev) =>
          prev.filter((dday) => dday.ddayId !== scheduleId)
        )
        return { prevData }
      },
      onSuccess: () => {
        console.log('success')
      },
      onError: (err, data, context) => {
        console.error(err)
        queryClient.setQueryData(['dDayList'], context.prevData)
      },
    }
  )
  return mutate
}
export default useDeleteScheduleMutation
