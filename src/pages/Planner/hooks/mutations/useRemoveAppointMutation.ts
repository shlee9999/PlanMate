import { FindPlannerResponseProps } from 'api/planner/findPlanner'
import { DeletePlannerRequestProps, deletePlanner } from 'api/planner/deletePlanner'
import { useMutation, useQueryClient } from 'react-query'
import { QueryKeyType } from 'enums'

type RemoveAppointMutationProps = DeletePlannerRequestProps

/**플래너 일정 삭제 */
function useRemoveAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateRemoveAppoint } = useMutation(
    ({ plannerId }: RemoveAppointMutationProps) => deletePlanner({ plannerId }),
    {
      onMutate: ({ plannerId }) => {
        const previousAppointments = queryClient.getQueryData<FindPlannerResponseProps>([QueryKeyType.plannerData])
        queryClient.setQueryData<FindPlannerResponseProps>([QueryKeyType.plannerData], (old) =>
          old.filter((app) => app.plannerId !== plannerId)
        )
        return { previousAppointments }
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData([QueryKeyType.plannerData], context.previousAppointments)
      },
      onSuccess: () => {
        console.log('Remove planner successful')
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeyType.plannerData])
      },
    }
  )
  return mutateRemoveAppoint
}

export default useRemoveAppointMutation
