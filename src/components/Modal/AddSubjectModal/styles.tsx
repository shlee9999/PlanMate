import { styled } from "styled-components";

export const StyledAddSubjectModal = styled.div`
  padding: 15px 20px;
  width: 200px;
  height: 150px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`;

export const ModalExitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const AddSubjectModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SubjectInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;
export const SubjectTitle = styled.div``;

export const SubjectColor = styled.button`
  text-align: left;
  background-color: ${(props) => props.color};
  color: white;
`;
