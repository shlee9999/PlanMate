import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormattedTime, startTimer, stopTimer } from '../../utils/helper';
import { Globals } from '../../types';
import { StyledTodoItem, LeftWrapper, StartButton, PauseButton, SubjectTitle, Time, RightWrapper, EllipsisButton } from './styles';
import EllipsisModal from '../Modal/EllipsisModal';
function TodoItem({ title, todo_id }: { title: string; todo_id: string }) {
  const store = useSelector((state: Globals) => state.isRunning);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const formattedTime: string = useFormattedTime(time);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false);

  const startTotalTimer = (): void => {
    dispatch({ type: 'RUN_STUDY' });
  };

  const stopTotalTimer = (): void => {
    dispatch({ type: 'STOP_STUDY' });
  };

  const handleOnStart = (): void => {
    if (!store) {
      setIsRunning(true);
      startTotalTimer();
    }
  };

  useEffect(() => {
    if (!isRunning) {
      stopTimer(intervalId.current);
      return;
    }
    intervalId.current = startTimer(() => {
      setTime((prev) => prev + 1);
    });
  }, [isRunning]);

  const handleOnPause = (): void => {
    setIsRunning(false);
    stopTotalTimer();
  };

  const handleOnClickEllipsisButton = () => {
    setIsEllipsisOpen(true);
  };
  const closeEllipsis = () => {
    setIsEllipsisOpen(false);
  };
  return (
    <StyledTodoItem>
      <LeftWrapper>
        {isRunning ? <PauseButton onClick={handleOnPause}>Pause</PauseButton> : <StartButton onClick={handleOnStart}>Start</StartButton>}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <RightWrapper>
        <Time>{formattedTime}</Time>
        <EllipsisButton onClick={handleOnClickEllipsisButton}></EllipsisButton>
      </RightWrapper>
      {isEllipsisOpen && <EllipsisModal closeModal={closeEllipsis} todo_id={todo_id} />}
    </StyledTodoItem>
  );
}

export default TodoItem;
