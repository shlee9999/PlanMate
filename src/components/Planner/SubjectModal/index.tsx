import { AddModal } from './AddModal'

const SubjectModal = ({
  isModalOpen,
  closeModal,
  title,
}: {
  isModalOpen: boolean
  closeModal: () => void
  title: string
}) => {
  return <AddModal isModalOpen={isModalOpen} closeModal={closeModal} title={title}></AddModal>
}

export default SubjectModal
