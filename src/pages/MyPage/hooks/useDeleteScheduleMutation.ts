import { DeleteScheduleRequestProps, deleteSchedule } from 'api/schedule/deleteSchedule'
import { DDayType } from 'api/types/ScheduleType'
import { useQueryClient, useMutation } from 'react-query'

type UseDeleteScheduleMutationProps = DeleteScheduleRequestProps

/**일정 삭제 */
function useDeleteScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ scheduleId }: UseDeleteScheduleMutationProps) => deleteSchedule({ scheduleId }), {
    onMutate: ({ scheduleId }) => {
      const prevData = queryClient.getQueryData(['dDayList'])
      queryClient.setQueryData<DDayType[]>('dDayList', (prev) => prev.filter((dday) => dday.scheduleId !== scheduleId))
      return { prevData }
    },
    onSuccess: () => {
      console.log('success')
    },
    onError: (err, data, context) => {
      console.error(err)
      queryClient.setQueryData(['dDayList'], context.prevData)
    },
  })
  return mutate
}
export default useDeleteScheduleMutation
