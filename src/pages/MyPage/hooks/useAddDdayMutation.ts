import { AddDdayRequestProps, addDday } from 'api/dday/addDday'
import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { DDayEntityType } from 'api/types/ScheduleType'
import { useQueryClient, useMutation } from 'react-query'
import { dateUtils } from 'utils'

type AddScheduleMutationProps = AddDdayRequestProps & {
  callBack: () => void
}

/**D-Day 추가 */
function useAddDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ targetDate, title }: AddScheduleMutationProps) => addDday({ targetDate, title }), {
    onMutate: ({ targetDate, title }) => {
      const prevData = queryClient.getQueryData(['dDayList'])
      queryClient.setQueryData<FindAllDdayResponseProps>(['dDayList'], (prev) => [
        ...prev,
        {
          dDayId: new Date().getTime(),
          targetDate,
          title,
          isFixed: false,
          remainingDays: dateUtils.daysUntil(targetDate),
        },
      ])
      return { prevData }
    },
    onSuccess: ({ dDayId }) => {
      console.log('success')
      queryClient.setQueryData<FindAllDdayResponseProps>(['dDayList'], (prev) => {
        const createdDday = prev[prev.length - 1]
        createdDday.dDayId = dDayId
        return prev.slice(0, -1).concat(createdDday)
      })
    },
    onError: (err, { callBack }, context) => {
      queryClient.setQueryData(['dDayList'], context.prevData)
      console.error(err)
      callBack()
    },
  })
  return mutate
}
export default useAddDdayMutation
