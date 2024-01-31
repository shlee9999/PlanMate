import { defaultColor } from 'constants/color'
import { useForm } from 'hooks'
import { RootState } from 'modules'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useInitialization, useSubmit } from './hooks'
import { PlannerType } from 'api/types'

type useSelectModalProps = {
  closeModal: () => void
  isOpen: boolean
  type: 'ADD' | 'EDIT'
}
type IForm = Pick<PlannerType, 'scheduleName'>

export const useSelectModal = ({ closeModal, type, isOpen }: useSelectModalProps) => {
  const { startAt, endAt, scheduleName, colorHex, plannerId, day } = useSelector(
    (state: RootState) => state.selectedInfo
  )
  const { registerInput, handleSubmit, inputFocus, setValue } = useForm<IForm>()
  const { onSubmit } = useSubmit({ startAt, endAt, colorHex, plannerId, day, closeModal, type })
  const [subjectColor, setSubjectColor] = useState<string>(type === 'EDIT' ? colorHex : defaultColor)
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()

  useInitialization({
    isOpen,
    setScheduleNameInput: (scheduleName: string) => setValue('scheduleName', scheduleName),
    scheduleNameInputFocus: () => inputFocus('scheduleName'),
    initializeSubjectColor: () => setSubjectColor(defaultColor),
    subjectColor,
    scheduleName,
  })

  return { registerInput, handleSubmit, handleModalClick, onSubmit, setSubjectColor, subjectColor, day }
}
