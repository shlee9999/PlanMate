import { FindPlannerResponseProps } from 'api/planner/findPlanner'
import { RemovePlannerRequestProps, removePlanner } from 'api/planner/removePlanner'
import { useMutation, useQueryClient } from 'react-query'

type RemoveAppointMutationProps = RemovePlannerRequestProps

/**플래너 일정 삭제 */
function useRemoveAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateRemoveAppoint } = useMutation(
    ({ plannerId }: RemoveAppointMutationProps) => removePlanner({ plannerId }),
    {
      onMutate: ({ plannerId }) => {
        const previousAppointments = queryClient.getQueryData<FindPlannerResponseProps>(['plannerData'])
        queryClient.setQueryData<FindPlannerResponseProps>(['plannerData'], (old) =>
          old.filter((app) => app.plannerId !== plannerId)
        )
        return { previousAppointments }
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData(['plannerData'], context.previousAppointments)
      },
      onSuccess: () => {
        console.log('Remove planner successful')
      },
      onSettled: () => {
        queryClient.invalidateQueries(['plannerData'])
      },
    }
  )
  return mutateRemoveAppoint
}

export default useRemoveAppointMutation
