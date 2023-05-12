import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  StyledModal as Modal,
  ModalExitButton,
  ModalFooter,
  ModalWrapper,
  InputWrapper,
  ButtonColor,
  ModalTitle,
  NameInput,
} from '../styles';
import { TodoItems } from 'src/types';
import ColorPickerModal from '../../ColorPickerModal';

const DefaultColor: string = '#ff0000' as const;
const EditModal = ({
  isModalOpen,
  closeModal,
  title,
  todo,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  todo: TodoItems;
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [subjectColor, setSubjectColor] = useState<string>(DefaultColor); //setSubjectColor
  const [isColorPickerModalOpen, setIsColorPickerModalOpen] =
    useState<boolean>(false);

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
      handleEditConfirm();
    }
    if (e.nativeEvent.key === 'Escape') {
      closeModalAll();
    }
  };
  const assignSubjectColor = (color) => {
    setSubjectColor(color);
  };

  const handleEditConfirm = () => {
    if (inputValue === '') return;
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
      setInputValue(inputRef.current.value);
    }
  }, [isModalOpen]);

  if (isModalOpen)
    return (
      <ModalWrapper onClick={closeModalAll}>
        <Modal onClick={handleModalClick}>
          <ModalTitle>{title}</ModalTitle>
          <ModalExitButton onClick={closeModalAll}>X</ModalExitButton>
          <InputWrapper>
            <NameInput
              defaultValue={todo.title}
              onChange={handleInputChange}
              onKeyDown={handleOnKeyDown}
              ref={inputRef}
            />
            <ButtonColor
              onClick={handleOnClickColorButton}
              color={subjectColor}
            >
              {title.slice(0, 2)}색상
            </ButtonColor>
          </InputWrapper>
          <ModalFooter>
            <button onClick={closeModalAll}>취소</button>
            <button onClick={handleEditConfirm}>확인</button>
          </ModalFooter>
          {isColorPickerModalOpen && (
            <ColorPickerModal
              closeModal={closeColorPickerModal}
              assignSubjectColor={assignSubjectColor}
            />
          )}
        </Modal>
      </ModalWrapper>
    );

  return null;
};

export default EditModal;
