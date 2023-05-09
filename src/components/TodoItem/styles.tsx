import styled from "styled-components";

export const StyledTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StartButton = styled.button`
  cursor: pointer;
`;

export const PauseButton = styled.button`
  cursor: pointer;
`;

export const SubjectTitle = styled.p`
  font-size: 1.2rem;
`;

export const Time = styled.p`
  font-size: 1.2rem;
`;
