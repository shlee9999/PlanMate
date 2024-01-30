import { useCreateSubjectMutation, useEditSubjectMutation } from 'pages/Timer/hooks/mutations'

type useActionSubmitProps = {
  type: 'ADD' | 'EDIT'
  colorHex: string
  name: string
  subjectId?: number
}

export const useActionSubmit = ({ type }: useActionSubmitProps) => {
  const mutateCreateSubject = useCreateSubjectMutation()
  const mutateEditSubject = useEditSubjectMutation()
  return {}
}
