import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { FixDdayRequestProps, fixDday } from 'api/dday/fixDday'
import { useQueryClient, useMutation } from 'react-query'

type UseFixScheduleMutationProps = FixDdayRequestProps

/**D-Day 고정하기 */
function useFixDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ dDayId: dDayId }: UseFixScheduleMutationProps) => fixDday({ dDayId: dDayId }), {
    onMutate: ({ dDayId: dDayId }) => {
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
export default useFixDdayMutation
