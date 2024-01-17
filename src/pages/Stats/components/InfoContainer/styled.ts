import styled from 'styled-components'

export const Root = styled.div`
  height: 400px;
  padding: 22px 24px;
  overflow: visible;
`

export const CompareTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`

export const CompareTimer = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: ${(props) => props.theme.text.black2};
`

export const ChartDividingLine = styled.hr`
  width: 98%;
  height: 2px;
  background-color: ${(props) => props.theme.background.gray1};
  margin: 20px 0;
`
export const Header = styled.p`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
`

export const StudyContainer = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
