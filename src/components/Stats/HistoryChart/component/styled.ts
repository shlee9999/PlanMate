import styled, { css } from 'styled-components'

const RecordContainer = styled.div`
  width: 100%;
  height: 60px;
`

const HeaderRecord = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #666666;
`

const MainRecord = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #222222;
`
const TimerRecordWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const PieChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StudyPiechartWrapper = styled.div`
  width: 180px;
  height: 142px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`

const PiechartTitle = styled.span`
  margin-bottom: 5px;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #666666;
`

//MainHistory
const MainHistoryContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: none;
`

const MainWrapper = styled.div`
  width: 100%;
  height: 160px;
  /* border-bottom: 1px solid #d9d9da; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TimerWrapper = styled.div`
  width: 40%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChartWrapper = styled.div`
  width: 55%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderWrapper = styled.div`
  height: 15px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export {
  RecordContainer,
  HeaderRecord,
  MainRecord,
  TimerRecordWrapper,
  PieChartContainer,
  StudyPiechartWrapper,
  PiechartTitle,
  MainHistoryContainer,
  MainWrapper,
  TimerWrapper,
  ChartWrapper,
  HeaderWrapper,
}
