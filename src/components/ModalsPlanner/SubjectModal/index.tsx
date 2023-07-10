import { TodoPlans } from 'types'
import { AddModal } from './AddModal'
// import EditModal from './EditModal'

const SubjectModal = ({
  isModalOpen,
  closeModal,
  title,
  todo,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
  todo: TodoPlans | null
}) => {
  switch (title.slice(-2)) {
    case '추가':
      return <AddModal isModalOpen={isModalOpen} closeModal={closeModal} title={title}></AddModal>
    // case '수정':
    //   return todo && <EditModal isModalOpen={isModalOpen} closeModal={closeModal} title={title} todo={todo}></EditModal>
  }
  return null
}

export default SubjectModal
