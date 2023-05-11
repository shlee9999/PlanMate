import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormattedTime, startTimer, stopTimer } from '../../utils/helper';
import { Globals, TodoItems } from '../../types';
import { StyledTodoItem, LeftWrapper, StartButton, PauseButton, SubjectTitle, Time, RightWrapper, EllipsisButton } from './styles';
import EllipsisModal from '../Modal/EllipsisModal';
const TodoItem = ({ title, todo, buttonColor }: { title: string; todo: TodoItems; buttonColor: string }) => {
  const isTotalTimerRunning = useSelector((state: Globals) => state.isRunning);
  const [isTodoTimerRunning, setIsTodoTimerRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const formattedTime: string = useFormattedTime(time);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();
  const [isEllipsisOpen, setIsEllipsisOpen] = useState<boolean>(false);

  const startTotalTimer = (): void => {
    dispatch({ type: 'RUN_TIMER' });
  };

  const stopTotalTimer = (): void => {
    dispatch({ type: 'STOP_TIMER' });
  };

  const handleOnStart = (): void => {
    if (!isTotalTimerRunning) {
      setIsTodoTimerRunning(true);
      startTotalTimer();
      if (todo.category === 'study') dispatch({ type: 'STUDY' });
      if (todo.category === 'exercise') dispatch({ type: 'EXERCISE' });
    }
  };

  useEffect(() => {
    if (!isTodoTimerRunning) {
      stopTimer(intervalId.current);
      return;
    }
    intervalId.current = startTimer(() => {
      setTime((prev) => prev + 1);
    });
  }, [isTodoTimerRunning]);

  const handleOnPause = (): void => {
    setIsTodoTimerRunning(false);
    stopTotalTimer();
  };

  const handleOnClickEllipsisButton = () => {
    setIsEllipsisOpen(true);
  };
  const closeEllipsis = () => {
    setIsEllipsisOpen(false);
  };
  return (
    <StyledTodoItem backgroundColor={todo.category === 'study' ? 'pink' : 'skyblue'}>
      <LeftWrapper>
        {isTodoTimerRunning ? (
          <PauseButton color={buttonColor} onClick={handleOnPause}>
            ||
          </PauseButton>
        ) : (
          <StartButton color={buttonColor} onClick={handleOnStart}>
            &gt;
          </StartButton>
        )}
        <SubjectTitle>{title}</SubjectTitle>
      </LeftWrapper>
      <RightWrapper>
        <Time>{formattedTime}</Time>
        <EllipsisButton onClick={handleOnClickEllipsisButton}></EllipsisButton>
      </RightWrapper>
      {isEllipsisOpen && <EllipsisModal closeModal={closeEllipsis} todo={todo} />}
    </StyledTodoItem>
  );
};

export default TodoItem;
