import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledAddSubjectModal,
  ModalExitButton,
  ModalFooter,
  ModalWrapper,
  SubjectInputs,
  SubjectColor,
  SubjectTitle,
} from "./styles";
import "./styles.jsx";
const AddSubjectModal = ({ isModalOpen, closeModal }) => {
  const [inputValue, setInputValue] = useState(null);
  const [subjectColor, setSubjectColor] = useState("#990000");

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleOnKeyDown = (e) => {
    if (e.nativeEvent.key === "Enter") {
      handleConfirm();
    }
  };

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    if (inputValue === "") return;
    const newItem = { title: inputValue, color: subjectColor, time: 0 };
    dispatch({ type: "ADD_TODO", value: newItem });
    closeModal();
  };
  useEffect(() => {
    if (isModalOpen) inputRef.current.focus();
  }, [isModalOpen]);
  return (
    isModalOpen && (
      <ModalWrapper>
        <StyledAddSubjectModal>
          <SubjectTitle>과목 이름</SubjectTitle>
          <ModalExitButton onClick={closeModal}>X</ModalExitButton>
          <SubjectInputs>
            <input
              type="text"
              placeholder="과목명"
              className="subject_name"
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
