import styled from 'styled-components';

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
export const RightWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;
export const EllipsisButton = styled.button`
  width: 50px;
  height: 20px;
  background-image: url('/assets/ellipsis.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  border: none;
`;

export const StartButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const PauseButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const SubjectTitle = styled.p`
  font-size: 1.2rem;
`;

export const Time = styled.p`
  font-size: 1.2rem;
`;
