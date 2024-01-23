import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { FixDdayRequestProps, fixSchedule } from 'api/dday/fixDday'
import { useQueryClient, useMutation } from 'react-query'

type UseFixScheduleMutationProps = FixDdayRequestProps

/**D-Day 고정하기 */
function useFixScheduleMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ dDayId }: UseFixScheduleMutationProps) => fixSchedule({ dDayId }), {
    onMutate: ({ dDayId }) => {
      const prevData = queryClient.getQueryData(['dDayList'])
      queryClient.setQueryData<FindAllDdayResponseProps>(['dDayList'], (prev) =>
        prev.filter((dDay) => (dDay.dDayId === dDayId ? { ...dDay, isFixed: !dDay.isFixed } : dDay))
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
