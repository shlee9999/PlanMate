import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`
const BtnBox = styled.div`
  button {
    border: 0;
    margin: 0;
    background-color: white;
    width: 30px;
    margin: 10px;

    &:hover{
      background-color: gray;
    }
  }
`

  interface Props {
    nowDate: Date;
    setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  }

export const ControlDate = ({ nowDate, setNowDate }: Props) => {
  const changeYear = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setFullYear(date.getFullYear() + change);
    setNowDate(date);
  };

  const changeMonth = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setMonth(date.getMonth() + change);
    setNowDate(date);
  };

  return (
    <Container>
      <BtnBox>
        <button onClick={() => changeYear(-1)}>{'<<'}</button>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
      </BtnBox>
      <h1> {`${nowDate.getMonth()+1+"월"}`}</h1>
      <BtnBox>
      <button onClick={() => changeMonth(1)}>{'>'}</button>
      <button onClick={() => changeYear(1)}>{'>>'}</button>
      </BtnBox>
    </Container>
  );
};
