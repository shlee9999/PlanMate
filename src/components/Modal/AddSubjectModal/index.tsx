import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledAddSubjectModal, ModalExitButton, ModalFooter, AddSubjectModalWrapper, SubjectInputs, SubjectColor, SubjectTitle } from './styles';
import { TodoItems } from 'src/types';
import ColorPickerModal from '../ColorPickerModal';
import { generateId } from 'src/utils/helper';
const DefaultColor: string = '#ff0000' as const;
const AddSubjectModal = ({ isModalOpen, closeModal }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor); //setSubjectColor
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const closeColorPickerModal = () => {
    setIsColorPickerModalOpen(false);
  };
  const handleOnClickColorButton = () => {
    setIsColorPickerModalOpen(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleConfirm();
    }

    if (e.nativeEvent.key === 'Escape') {
      closeModalAll();
    }
  };
  const assignSubjectColor = (color) => {
    setSubjectColor(color);
  };
  const handleConfirm = () => {
    if (inputValue === '') return;
    const newTodoItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      time: 0,
      id: generateId(),
    };
    dispatch({ type: 'ADD_TODO', value: newTodoItem });
    setInputValue('');
    closeModalAll();
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
    }
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <AddSubjectModalWrapper onClick={closeModalAll}>
        <StyledAddSubjectModal onClick={handleModalClick}>
          <SubjectTitle>과목 이름</SubjectTitle>
          <ModalExitButton onClick={closeModalAll}>X</ModalExitButton>
          <SubjectInputs>
            <input placeholder='과목명' onChange={handleInputChange} onKeyDown={handleOnKeyDown} ref={inputRef} />
            <SubjectColor onClick={handleOnClickColorButton} color={subjectColor}>
              과목색상
            </SubjectColor>
          </SubjectInputs>
          <ModalFooter>
            <button onClick={closeModalAll}>취소</button>
            <button onClick={handleConfirm}>확인</button>
          </ModalFooter>
          {isColorPickerModalOpen && <ColorPickerModal closeModal={closeColorPickerModal} assignSubjectColor={assignSubjectColor} />}
        </StyledAddSubjectModal>
      </AddSubjectModalWrapper>
    )
  );
};

export default AddSubjectModal;
