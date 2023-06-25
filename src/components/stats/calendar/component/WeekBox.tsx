import React from 'react'
import styled from 'styled-components'

interface Props {
  weekName: string;
}

const Container = styled.div`
  background-color: gray;
`;

export const WeekBox = ({ weekName }: Props) => {
  return (
    <Container>
      <p>{weekName}</p>
    </Container>
  )
}
