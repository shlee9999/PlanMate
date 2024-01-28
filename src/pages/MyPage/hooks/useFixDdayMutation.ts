import { FindAllDdayResponseProps } from 'api/dday/findAllDday'
import { FixDdayRequestProps, fixDday } from 'api/dday/fixDday'
import { QueryKeyType } from 'enums'
import { useQueryClient, useMutation } from 'react-query'

type UseFixScheduleMutationProps = FixDdayRequestProps

/**D-Day 고정하기 */
function useFixDdayMutation() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(({ dDayId: dDayId }: UseFixScheduleMutationProps) => fixDday({ dDayId: dDayId }), {
    onMutate: ({ dDayId: clickedDdayId }) => {
      const prevData = queryClient.getQueryData([QueryKeyType.dDayList])
      queryClient.setQueryData<FindAllDdayResponseProps>([QueryKeyType.dDayList], (prev) =>
        prev.map((dDay) => {
          //* isFixed가 true인 다른 dDayId의 DDay가 존재 - 일반적인 경우 (다른 DDay를 고정한 경우)
          if (dDay.dDayId !== clickedDdayId && dDay.isFixed === true) {
            //* 다른 DDay의 고정을 해제한다
            return { ...dDay, isFixed: false }
          }
          //* 우리 웹사이트에서는 고정 해제라는 게 존재하지 않는다. 고로 항상 true를 넣어줌
          if (dDay.dDayId === clickedDdayId) {
            //* 해당 D-DAY
            return { ...dDay, isFixed: true }
          }
          return dDay
        })
      )
      return { prevData }
    },
    onSuccess: () => {
      console.log('fix success')
      queryClient.invalidateQueries([QueryKeyType.dDayList])
    },
    onError: (err, vars, context) => {
      console.error(err)
      queryClient.setQueryData([QueryKeyType.dDayList], context.prevData)
    },
  })
  return mutate
}
export default useFixDdayMutation
