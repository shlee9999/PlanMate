import { useCreateSubjectMutation, useEditSubjectMutation } from 'pages/Timer/hooks/mutations'

type useActionSubmitProps = {
  type: 'ADD' | 'EDIT'
  subjectId?: number
  setIsConfirmed: (state: boolean) => void
  closeModal: () => void
  closeModalAll: () => void
  subjectColor: string
}
type IForm = {
  ADD: string
  EDIT: string
}
export const useActionSubmit = ({
  type,
  subjectId,
  setIsConfirmed,
  closeModal,
  closeModalAll,
  subjectColor,
}: useActionSubmitProps) => {
  const mutateCreateSubject = useCreateSubjectMutation()
  const mutateEditSubject = useEditSubjectMutation()
  const onSubmit = (data: IForm) => {
    setIsConfirmed(true)
    // * ADD는 ExitComplete 시 mutate 실행하므로, 모달을 닫아주기만 하면 된다.
    if (type === 'ADD') {
      if (type === 'ADD')
        mutateCreateSubject({
          colorHex: subjectColor,
          name: data.ADD,
        })
      closeModal()
    } else {
      //EDIT
      closeModalAll()
      mutateEditSubject({
        colorHex: subjectColor,
        name: data.EDIT,
        subjectId,
      })
    }
  }
  return { onSubmit }
}
