import { EditDdayRequestProps, editDday } from 'api/dday/editDday'
import { QueryKeys } from 'types'
import { useQueryClient, useMutation } from 'react-query'
import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { dateUtils } from 'utils'

type UseEditScheduleMutationProps = EditDdayRequestProps & {
  //* input 초기화 콜백
  callBack: () => void
}

/**D-Day 수정 */
function useEditDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ targetDate, title, dDayId }: UseEditScheduleMutationProps) => editDday({ targetDate, title, dDayId }),
    {
      onMutate: ({ targetDate, title, dDayId, callBack }) => {
        const prevData = queryClient.getQueryData([QueryKeys.dDayList])
        queryClient.setQueryData<FindAllDdayResponseProps>([QueryKeys.dDayList], (prev) => {
          const newDdayList = prev.map((prevDday) =>
            prevDday.dDayId === dDayId
              ? {
                  ...prevDday,
                  targetDate,
                  title,
                  remainingDays: dateUtils.daysUntil(dateUtils.getDateProps(targetDate)),
                }
              : prevDday
          )
          const sortedNewDdayList = newDdayList.sort((a, b) => a.remainingDays - b.remainingDays)
          return sortedNewDdayList
        })
        callBack()
        return { prevData }
      },
      onSuccess: () => {
        console.log('success edit')
      },
      onError: (err, vars, context) => {
        queryClient.setQueryData([QueryKeys.dDayList], context.prevData)
        console.error(err)
      },
    }
  )
  return mutate
}
export default useEditDdayMutation
