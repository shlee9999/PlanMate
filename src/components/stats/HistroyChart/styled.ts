import styled from 'styled-components'

const ResultContainer = styled.div`
  width: 1200px;
  height: 392px;
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
`

const ResultStatsContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CompareStatsContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { ResultContainer, ResultStatsContainer, CompareStatsContainer }
