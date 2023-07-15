import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 240px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`

export const UpperTypo = styled.p`
  position: absolute;
  top: 36px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #444444;
`
export const CenterTypoWrapper = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CenterTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`
export const DescriptionTypo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #666666;
  margin-top: 4px;
`
