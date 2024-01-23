import { FindAllScheduleResponseProps } from 'api/schedule/findAllSchedule'
import { FixScheduleRequestProps, fixSchedule } from 'api/schedule/fixSchedule'
import { useQueryClient, useMutation } from 'react-query'

type UseFixScheduleMutationProps = FixScheduleRequestProps

/**D-Day 고정하기 */
function useFixScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ scheduleId }: UseFixScheduleMutationProps) => fixSchedule({ scheduleId }), {
    onMutate: ({ scheduleId }) => {
      const prevData = queryClient.getQueryData(['dDayList'])
      queryClient.setQueryData<FindAllScheduleResponseProps>(['dDayList'], (prev) =>
        prev.filter((dDay) => (dDay.scheduleId === scheduleId ? { ...dDay, isFixed: !dDay.isFixed } : dDay))
      )
      return { prevData }
    },
    onSuccess: () => {
      console.log('fix success')
    },
    onError: (err, vars, context) => {
      console.error(err)
      queryClient.setQueryData(['dDayList'], context.prevData)
    },
  })
  return mutate
}
export default useFixScheduleMutation
