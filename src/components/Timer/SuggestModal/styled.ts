import { GreenButton } from 'components/common/commonStyle'
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

export const LongGreenButton = styled(GreenButton)`
  width: 100%;
`

export const UpperTypo = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 4px;
`
export const LowerTypo = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
`
