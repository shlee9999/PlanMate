import styled from 'styled-components'

export const ResultContainer = styled.div`
  width: 800px;
  height: 380px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px 20px;
`

export const HeaderDateWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: flex-start;
`

export const ResultStatsContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CompareStatsContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const CompareTitleWrapper = styled.div`
  position: relative;
  top: -5px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 120px;
  height: 0px;
  padding-bottom: 5px;
`

export const CompareTitle = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #666666;
`
export const CompareTimer = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #444444;
`
