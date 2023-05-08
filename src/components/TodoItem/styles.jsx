import styled from "styled-components";
const StyledTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StartButton = styled.button`
  cursor: pointer;
`;
const PauseButton = styled.button`
  cursor: pointer;
`;

const SubjectTitle = styled.p`
  font-size: 1.2rem;
`;

const Time = styled.p`
  font-size: 1.2rem;
`;

export {
  StyledTodoItem,
  LeftWrapper,
  StartButton,
  PauseButton,
  SubjectTitle,
  Time,
};
