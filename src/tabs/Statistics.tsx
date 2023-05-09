//통계 탭
// import React from "react";
import styled from "styled-components";
import MenuBox from "../components/stats/menu";

const StatsContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 3px solid blue;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Statistics() {
  return (
    <StatsContainer>
      <MenuBox></MenuBox>
    </StatsContainer>
  );
}
export default Statistics;
