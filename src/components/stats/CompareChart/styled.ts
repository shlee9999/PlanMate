import styled from 'styled-components';

const ResultContainer = styled.div`
  width: 704px;
  height: 392px;
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultStatsContainer = styled.div`
  width: 100%;
  height: 210px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CompareStatsContainer = styled.div`
  width: 631px;
  height: 90px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { ResultContainer, ResultStatsContainer, CompareStatsContainer };
