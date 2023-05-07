import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
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
      <div className="modal_wrapper">
        <div className="add_subject_modal">
          <p>과목 이름</p>
          <button className="modal_exit_button" onClick={closeModal}>
            X
          </button>
          <div className="subject_inputs">
            <input
              type="text"
              placeholder="과목명"
              className="subject_name"
              onChange={handleInputChange}
              onKeyDown={handleOnKeyDown}
              ref={inputRef}
            />
            <button className="subject_color">과목색상</button>
          </div>
          <div className="modal_footer">
            <button onClick={closeModal}>취소</button>
            <button onClick={handleConfirm}>확인</button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddSubjectModal;
