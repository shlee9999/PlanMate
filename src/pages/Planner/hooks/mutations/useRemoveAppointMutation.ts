import { FindPlannerResponseProps } from 'api/planner/findPlanner'
import { DeletePlannerRequestProps, deletePlanner } from 'api/planner/deletePlanner'
import { useMutation, useQueryClient } from 'react-query'
import { QueryKeys } from 'types'

type RemoveAppointMutationProps = DeletePlannerRequestProps

/**플래너 일정 삭제 */
function useRemoveAppointMutation() {
  const queryClient = useQueryClient()
  const { mutate: mutateRemoveAppoint } = useMutation(
    ({ plannerId }: RemoveAppointMutationProps) => deletePlanner({ plannerId }),
    {
      onMutate: ({ plannerId }) => {
        const previousAppointments = queryClient.getQueryData<FindPlannerResponseProps>([QueryKeys.plannerData])
        queryClient.setQueryData<FindPlannerResponseProps>([QueryKeys.plannerData], (old) =>
          old.filter((app) => app.plannerId !== plannerId)
        )
        return { previousAppointments }
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData([QueryKeys.plannerData], context.previousAppointments)
      },
      onSuccess: () => {
        console.log('Remove planner successful')
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKeys.plannerData])
      },
    }
  )
  return mutateRemoveAppoint
}

export default useRemoveAppointMutation
