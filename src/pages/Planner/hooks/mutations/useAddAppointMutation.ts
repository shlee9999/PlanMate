import { AddPlannerRequestProps, addPlanner } from 'api/planner/addPlanner'
import { useMutation, useQueryClient } from 'react-query'
import { PlannerType } from 'api/types'

type AddAppointMutationProps = AddPlannerRequestProps

/**플래너 일정 추가 */
function useAddAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateAddAppoint } = useMutation(
    ({ colorHex, day, startAt, endAt, scheduleName }: AddAppointMutationProps) =>
      addPlanner({
        colorHex,
        day,
        startAt,
        endAt,
        scheduleName,
      }),
    {
      onMutate: ({ colorHex, day, startAt, endAt, scheduleName }) => {
        const previousAppointments = queryClient.getQueryData<PlannerType[]>(['plannerData'])
        queryClient.setQueryData<PlannerType[]>(
          ['plannerData'],
          (prev) => prev.concat({ colorHex, day, startAt, endAt, scheduleName, plannerId: new Date().getTime() }) // tempId
        )
        return { previousAppointments }
      },
      onSuccess: (data, vars, context) => {
        console.log('success add')
        queryClient.setQueryData<PlannerType[]>(['plannerData'], (prev) => {
          const updatedAppoint = prev[prev.length - 1]
          updatedAppoint.plannerId = data.plannerId
          return [updatedAppoint, ...context.previousAppointments]
        })
      },
      onError: (err, vars, context) => {
        console.error('error:', err)
        queryClient.setQueryData<PlannerType[]>(['plannerData'], context.previousAppointments)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['plannerData'])
      },
    }
  )
  return mutateAddAppoint
}
export default useAddAppointMutation
