import { AddDdayRequestProps, addDday } from 'api/dday/addDday'
import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { QueryKeys } from 'types'
import { useQueryClient, useMutation } from 'react-query'
import { dateUtils } from 'utils'

type AddScheduleMutationProps = AddDdayRequestProps & {
  //* input 초기화 콜백
  callBack: () => void
}

/**D-Day 추가 */
function useAddDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ targetDate, title }: AddScheduleMutationProps) => addDday({ targetDate, title }), {
    onMutate: ({ targetDate, title, callBack }) => {
      const prevData = queryClient.getQueryData([QueryKeys.dDayList])
      queryClient
        .setQueryData<FindAllDdayResponseProps>([QueryKeys.dDayList], (prev) => [
          ...prev,
          {
            dDayId: new Date().getTime(),
            targetDate,
            title,
            isFixed: false,
            remainingDays: dateUtils.daysUntil(dateUtils.getDateProps(targetDate)),
          },
        ])
        .sort((a, b) => a.remainingDays - b.remainingDays)
      callBack()
      return { prevData }
    },
    onSuccess: ({ dDayId }) => {
      console.log('success add dDay')
      queryClient.setQueryData<FindAllDdayResponseProps>([QueryKeys.dDayList], (prev) => {
        const createdDday = prev[prev.length - 1]
        createdDday.dDayId = dDayId
        return prev.slice(0, -1).concat(createdDday)
      })
    },
    onError: (err, vars, context) => {
      queryClient.setQueryData([QueryKeys.dDayList], context.prevData)
      console.error(err)
    },
  })
  return mutate
}
export default useAddDdayMutation
