import { DeleteDdayRequestProps, deleteDday } from 'api/dday/deleteDday'
import { DDayEntityType } from 'api/types/ScheduleType'
import { useQueryClient, useMutation } from 'react-query'

type UseDeleteScheduleMutationProps = DeleteDdayRequestProps

/**일정 삭제 */
function useDeleteDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ dDayId: scheduleId }: UseDeleteScheduleMutationProps) => deleteDday({ dDayId: scheduleId }),
    {
      onMutate: ({ dDayId: scheduleId }) => {
        const prevData = queryClient.getQueryData(['dDayList'])
        queryClient.setQueryData<DDayEntityType[]>('dDayList', (prev) =>
          prev.filter((dday) => dday.dDayId !== scheduleId)
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
export default useDeleteDdayMutation
