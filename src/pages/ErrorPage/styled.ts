import styled from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`
export const ErrorImg = styled.img`
  margin-top: 140px;
  width: 80px;
  height: 80px;
`
export const UpperTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  color: #444444;
`
export const LowerTypo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #c6c6c6;
`
export const RetryButton = styled.button`
  margin-top: 32px;
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #01cb45;
  color: #01cb45;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #1db951;
  }
`
