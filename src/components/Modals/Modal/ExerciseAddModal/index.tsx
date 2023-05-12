import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledAddSubjectModal, ModalExitButton, ModalFooter, AddSubjectModalWrapper, SubjectInputs, SubjectColor, SubjectTitle, SubjectInput } from './styles';
import { TodoItems } from 'src/types';
import ColorPickerModal from '../../ColorPickerModal';
import { generateId } from 'src/utils/helper';
const DefaultColor: string = '#ff0000' as const;
const SubjectModal = ({ isModalOpen, closeModal, title, todo }: { isModalOpen: boolean; closeModal: () => void; title: string; todo: TodoItems | null }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor); //setSubjectColor
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false);
    inputRef.current?.focus();
  };
  const handleOnClickColorButton = () => {
    setIsColorPickerModalOpen(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!todo) handleAddConfirm();
      else handleEditConfirm();
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll();
    }
  };
  const assignSubjectColor = (color) => {
    setSubjectColor(color);
  };
  const handleAddConfirm = () => {
    if (inputValue === '') return;
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: title === '과목 추가' ? 'study' : 'exercise',
      time: 0,
      id: generateId(),
    };
    dispatch({ type: 'ADD_TODO', value: newTodoItem });
    setInputValue('');
    closeModalAll();
  };
  const handleEditConfirm = () => {
    if (inputValue === '' || !todo) return;
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      category: todo.category,
      time: todo.time,
      id: todo.id,
    };
    dispatch({ type: 'UPDATE_TODO', value: newTodoItem, id: todo.id });
    setInputValue('');
    closeModalAll();
    console.log(todo.id);
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const closeModalAll = () => {
    if (isColorPickerModalOpen) closeColorPickerModal();
    closeModal();
  };
  useEffect(() => {
    if (!inputRef || !inputRef.current) return;
    if (isModalOpen) {
      setSubjectColor(DefaultColor);
      inputRef.current.focus();
      if (todo) setInputValue(inputRef.current.value);
    }
  }, [isModalOpen]);

  if (isModalOpen)
    return (
      <AddSubjectModalWrapper onClick={closeModalAll}>
        <StyledAddSubjectModal onClick={handleModalClick}>
          <SubjectTitle>{title}</SubjectTitle>
          <ModalExitButton onClick={closeModalAll}>X</ModalExitButton>
          <SubjectInputs>
            {todo ? (
              <SubjectInput defaultValue={todo.title} onChange={handleInputChange} onKeyDown={handleOnKeyDown} ref={inputRef} />
            ) : (
              <SubjectInput placeholder='과목명' onChange={handleInputChange} onKeyDown={handleOnKeyDown} ref={inputRef} />
            )}
            <SubjectColor onClick={handleOnClickColorButton} color={subjectColor}>
              과목색상
            </SubjectColor>
          </SubjectInputs>
          <ModalFooter>
            <button onClick={closeModalAll}>취소</button>
            {todo ? <button onClick={handleEditConfirm}>확인</button> : <button onClick={handleAddConfirm}>확인</button>}
          </ModalFooter>
          {isColorPickerModalOpen && <ColorPickerModal closeModal={closeColorPickerModal} assignSubjectColor={assignSubjectColor} />}
        </StyledAddSubjectModal>
      </AddSubjectModalWrapper>
    );

  return null;
};

export default SubjectModal;
