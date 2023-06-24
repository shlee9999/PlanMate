import styled from 'styled-components';
import 'globals.css';
type StyledTodoItemProps = {
  backgroundColor: string;
};
export const StyledTodoItem = styled.div<StyledTodoItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  background-color: ${(props) => props.backgroundColor || 'pink'};
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
  cursor: pointer;
`;

export const CircleButton = styled.button`
  border-radius: 50%;
  width: 2vw;
  height: 2vw;
  cursor: pointer;
`;

export const StartButton = styled(CircleButton)`
  background-color: ${(props) => props.color};
  color: white;
`;

export const PauseButton = styled(CircleButton)`
  background-color: ${(props) => props.color};
  color: white;
`;

export const SubjectTitle = styled.p`
  font-size: 1.2rem;
`;

export const Time = styled.p`
  font-size: 1.2rem;
`;
