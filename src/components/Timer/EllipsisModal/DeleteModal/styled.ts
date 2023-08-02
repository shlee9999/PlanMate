import styled from 'styled-components'

export const Root = styled.div`
  width: 320px;
  height: 240px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`

export const TitleTypo = styled.p`
  margin-top: 36px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #444444;
`
export const UpperDescriptionTypo = styled.p`
  margin-top: 24px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
`
export const LowerDescriptionTypo = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
`
