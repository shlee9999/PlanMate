import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledAddSubjectModal,
  ModalExitButton,
  ModalFooter,
  ModalWrapper,
  SubjectInputs,
  SubjectColor,
  SubjectTitle,
} from "./styles";
import { TodoItems } from "src/types";

const AddSubjectModal = ({ isModalOpen, closeModal }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [subjectColor] = useState<string>("#990000"); //setSubjectColor
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = (e) => {
    if (e.nativeEvent.key === "Enter") {
      handleConfirm();
    }

    if (e.nativeEvent.key === "Escape") {
      closeModal();
    }
  };
  const handleConfirm = () => {
    if (inputValue === "") return;
    const newItem: TodoItems = {
      title: inputValue,
      color: subjectColor,
      time: 0,
    };
    dispatch({ type: "ADD_TODO", value: newItem });
    setInputValue("");
    closeModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (!inputRef || !inputRef.current) return;
    if (isModalOpen) inputRef.current.focus();
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <ModalWrapper onClick={closeModal}>
        <StyledAddSubjectModal onClick={handleModalClick}>
          <SubjectTitle>과목 이름</SubjectTitle>
          <ModalExitButton onClick={closeModal}>X</ModalExitButton>
          <SubjectInputs>
            <input
              placeholder="과목명"
              onChange={handleInputChange}
              onKeyDown={handleOnKeyDown}
              ref={inputRef}
            />
            <SubjectColor>과목색상</SubjectColor>
          </SubjectInputs>
          <ModalFooter>
            <button onClick={closeModal}>취소</button>
            <button onClick={handleConfirm}>확인</button>
          </ModalFooter>
        </StyledAddSubjectModal>
      </ModalWrapper>
    )
  );
};

export default AddSubjectModal;
