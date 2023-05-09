import React from "react";
import Chalendar from "../chalendar";
import TimerCheck from "../timercheck";
import ResultGraph from "../resultgraph";
import { MenuContainer } from "./styles";

function MenuBox() {
  return (
    <MenuContainer>
      <Chalendar></Chalendar>
      <TimerCheck></TimerCheck>
      <ResultGraph></ResultGraph>
    </MenuContainer>
  );
}

export default MenuBox;
