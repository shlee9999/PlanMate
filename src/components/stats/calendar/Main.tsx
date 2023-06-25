import React, {useState} from 'react'
import ControlDate  from './ControlDate'
import  DateBox from './DateBox'
import styled from "styled-components"

const Container = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;


export const Main = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickDate, setClickDate] = useState<Date>();
  return (
    <Container>
      <ControlDate/>
      <DateBox/>
    </Container>
  )
}
