import styled from 'styled-components'

export const Root = styled.div``

export const Banner = styled.div`
  box-sizing: border-box;
  padding: 30px 120px;
  display: flex;
  justify-content: space-between;
`
export const LeftTopDescriptionWrapper = styled.div``
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Date = styled.p`
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #444444;
`
export const Title = styled.p`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 8px;
`
export const ModeSelectorWrapper = styled.div`
  border-collapse: collapse;
  display: flex;
  text-align: center;
`
export const ModeSelector = styled.div`
  width: 96px;
  height: 32px;
  line-height: 32px;
  border-width: 1px 1px 0 1px;
  border-radius: 8px 8px 0 0;
  border-style: solid;
  border-color: #dddede;
  cursor: pointer;
`

export const ResultContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 32px;
  width: 400px;
  height: 238px;
  border-radius: 0 8px 8px 8px;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #dddede;
`
export const UpperDescriptionTypo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`

export const LowerDescriptionTypo = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #666666;

  bottom: 20px;
  left: 32px;
`
export const YellowTypo = styled.span`
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  color: #ffc955;
  word-wrap: break-word;
`

export const StatsContainer = styled.div`
  width: 689px;
  height: 270px;
  border-radius: 10px;
  border: 1px solid #dddede;
  box-sizing: border-box;
  padding: 32px;
`

export const TodoContainer = styled.div`
  /* display: flex;
  justify-content: center; */
`
export const RightContainer = styled.div`
  box-sizing: border-box;
  padding-top: 17px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 5px;
  width: 64px;
  height: 32px;

  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  color: #666666;
  text-align: center;
  cursor: pointer;
`
export const PlusImg = styled.img`
  width: 15px;
  height: 15px;
`
export const LowerContainer = styled.div`
  position: relative;
  padding: 100px 160px 0;
`

export const CheerTypo = styled.div`
  position: absolute;
  top: 8px;
  left: 162px;
  font-size: 14px;
  font-weight: 500;
  color: #444444;
  line-height: 18px;
`
export const Dday = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #444444;
`

export const GreenTypo = styled.span`
  color: #10d178;
  word-wrap: break-word;
`
export const Test = styled.span`
  font-weight: 700;
`
