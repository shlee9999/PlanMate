import { DeleteSubjectButton, EllipsisModalWrapper, StyledEllipsisModal, UpdateSubjectButton } from './styles';
import { useDispatch } from 'react-redux';
function EllipsisModal({ closeModal, todo_id }: { closeModal: () => void; todo_id: string }) {
  const dispatch = useDispatch();
  const closeModalAll = () => {
    closeModal();
    //하위 모달도 닫기
  };
  const handleOnClickDeleteButton = () => {
    dispatch({ type: 'DEL_TODO', id: todo_id });
    closeModalAll();
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <EllipsisModalWrapper onClick={closeModalAll}>
      <StyledEllipsisModal onClick={handleModalClick}>
        <UpdateSubjectButton>과목 수정</UpdateSubjectButton>
        <DeleteSubjectButton onClick={handleOnClickDeleteButton}>과목 삭제</DeleteSubjectButton>
      </StyledEllipsisModal>
    </EllipsisModalWrapper>
  );
}
export default EllipsisModal;
