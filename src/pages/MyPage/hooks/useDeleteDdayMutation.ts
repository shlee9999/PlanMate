import { DeleteDdayRequestProps, deleteDday } from 'api/dday/deleteDday'
import { DDayEntityType } from 'api/types/ScheduleType'
import { QueryKeyType } from 'enums'
import { useQueryClient, useMutation } from 'react-query'

type UseDeleteScheduleMutationProps = DeleteDdayRequestProps & {
  callBack: () => void
}

/**일정 삭제 */
function useDeleteDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ dDayId: scheduleId }: UseDeleteScheduleMutationProps) => deleteDday({ dDayId: scheduleId }),
    {
      onMutate: ({ dDayId: scheduleId, callBack }) => {
        const prevData = queryClient.getQueryData([QueryKeyType.dDayList])
        queryClient.setQueryData<DDayEntityType[]>(QueryKeyType.dDayList, (prev) =>
          prev.filter((dday) => dday.dDayId !== scheduleId)
        )
        callBack()
        return { prevData }
      },
      onSuccess: () => {
        console.log('success')
      },
      onError: (err, data, context) => {
        console.error(err)
        queryClient.setQueryData([QueryKeyType.dDayList], context.prevData)
      },
    }
  )
  return mutate
}
export default useDeleteDdayMutation
