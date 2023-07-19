import styled from 'styled-components'

const ResultContainer = styled.div`
  width: 850px;
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

const CompareTitleWrapper = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 40px;
`

const CompareTitle = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #666666;
`
const CompareTimer = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #444444;
`

export { ResultContainer, ResultStatsContainer, CompareStatsContainer, CompareTitleWrapper, CompareTitle, CompareTimer }
