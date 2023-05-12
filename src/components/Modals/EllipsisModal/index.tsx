import { useState } from 'react';
import {
  DeleteSubjectButton,
  EllipsisModalWrapper,
  StyledEllipsisModal,
  UpdateSubjectButton,
} from './styles';
import { useDispatch } from 'react-redux';
import AddSubjectModal from '../Modal';
import { TodoItems } from 'src/types';
const EllipsisModal = ({
  closeModal,
  todo,
  isTodoTimerRunning,
}: {
  closeModal: () => void;
  todo: TodoItems;
  isTodoTimerRunning: boolean;
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();
  const closeModalAll = () => {
    closeModal();
    //하위 모달도 닫기
  };
  const handleClickDeleteButton = () => {
    if (isTodoTimerRunning) return; //타이머 가고 있을 때 삭제 불가
    dispatch({ type: 'DEL_TODO', id: todo.id });
    closeModalAll();
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleClickEditButton = () => {
    setIsEditModalOpen(true);
  };

  return (
    <EllipsisModalWrapper onClick={closeModalAll}>
      <StyledEllipsisModal onClick={handleModalClick}>
        <UpdateSubjectButton onClick={handleClickEditButton}>
          {todo.category === 'study' ? '과목 수정' : '종목 수정'}
        </UpdateSubjectButton>
        <DeleteSubjectButton onClick={handleClickDeleteButton}>
          {todo.category === 'study' ? '과목 삭제' : '종목 삭제'}
        </DeleteSubjectButton>
      </StyledEllipsisModal>
      {isEditModalOpen && (
        <AddSubjectModal
          todo={todo}
          isModalOpen={isEditModalOpen}
          closeModal={closeModal}
          title={todo.category === 'study' ? '과목 수정' : '종목 수정'}
        ></AddSubjectModal>
      )}
    </EllipsisModalWrapper>
  );
};
export default EllipsisModal;
