import { addPlanner } from 'api/planner/addPlanner'
import { useMutation, useQueryClient } from 'react-query'
import { PlannerType } from 'api/types'

function useAddAppointMutation({ colorHex, day, startAt, endAt, scheduleName }: Omit<PlannerType, 'plannerId'>) {
  const queryClient = useQueryClient()
  const { mutate: mutateAddAppoint } = useMutation(
    () =>
      addPlanner({
        colorHex,
        day,
        startAt,
        endAt,
        scheduleName,
      }),
    {
      onMutate: async () => {
        const previousAppointments = queryClient.getQueryData<PlannerType[]>(['plannerData'])
        queryClient.setQueryData<PlannerType[]>(
          ['plannerData'],
          (prev) => prev.concat({ colorHex, day, startAt, endAt, scheduleName, plannerId: new Date().getTime() }) // tempId
        )
        return { previousAppointments }
      },
      onSuccess: () => {
        console.log('success add')
      },
      onError: (err) => {
        console.error('error:', err)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['plannerData'])
      },
    }
  )
  return mutateAddAppoint
}
export default useAddAppointMutation
