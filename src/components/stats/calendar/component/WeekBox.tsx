import React from 'react'
import styled from 'styled-components'

interface Props {
  weekName: string;
}

const Container = styled.div`
  width: 13px;
  height: 18px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  background-color: white;
  font-size: 14px;
`;

export const WeekBox = ({ weekName }: Props) => {
  return (
    <Container>
      <p>{weekName}</p>
    </Container>
  )
}
