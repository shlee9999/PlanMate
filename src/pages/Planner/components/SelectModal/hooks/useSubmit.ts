import { PlannerType } from 'api/types'
import { useAddAppointMutation, useEditAppointMutation } from 'pages/Planner/hooks/mutations'

type useSubmitProps = Omit<PlannerType, 'plannerId' | 'scheduleName'> & {
  plannerId?: number
  type: 'ADD' | 'EDIT'
  closeModal: () => void
}
type IForm = Pick<PlannerType, 'scheduleName'>

export const useSubmit = ({
  colorHex,
  startAt,
  day,
  endAt,
  plannerId = new Date().getTime(), //* tempId
  type,
  closeModal,
}: useSubmitProps) => {
  const mutateAddAppoint = useAddAppointMutation()
  const mutateEditAppoint = useEditAppointMutation()
  const onSubmit = (data: IForm) => {
    if (type === 'ADD') {
      mutateAddAppoint({ colorHex, startAt, day, endAt, scheduleName: data.scheduleName })
    } else {
      // 수정
      mutateEditAppoint({
        colorHex,
        startAt,
        day,
        endAt,
        scheduleName: data.scheduleName,
        plannerId,
      })
    }
    closeModal()
  }
  return { onSubmit }
}
