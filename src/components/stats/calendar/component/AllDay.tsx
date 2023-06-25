import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  sameMonth: boolean;
  sameDay: boolean;
  clickDay: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 24px;
  height: 24px;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: gray;
  }

  p {
    padding: 3px;  
    font-weight: ${({ sameMonth }) => (sameMonth ? "700" : "300")};
  }
`


interface Props {
  day: Date; 
  nowDate: Date;
  setNowDate:React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date|undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>; 
}


export const AllDay = ({ day, nowDate, setNowDate, clickedDate, setClickedDate}: Props) => {
  const nowTime = new Date();
  
  const sameMonth = nowDate.getMonth() === day.getMonth();
  const sameDay = 
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  const clickDay: boolean = clickedDate
    ? clickedDate.getFullYear() === day.getFullYear() &&
      clickedDate.getMonth() === day.getMonth() &&
      clickedDate.getDate() === day.getDate()
    : false; 
    
  const clickDate = () => {
    setClickedDate(day);
  };
  
  return (
    <Container onClick={clickDate} sameMonth={sameMonth} sameDay={sameDay} clickDay={clickDay} >
      <p>{day.getDate()}</p>
    </Container>
  )
}
