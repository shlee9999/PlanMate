import { RightArrow } from 'assets/SvgComponents'
import { LeftArrow } from 'commonStyled'
import { InfoBox } from 'components/InfoBox'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  flex-grow: 1;
  padding: 24px 25px;
  height: 400px;
  max-width: 420px;
`
export const Table = styled.table`
  width: 100%;
  height: 100%;
`
export const Header = styled.thead`
  /* background-color: tomato; */
`
export const HeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`
export const PrevButton = styled(LeftArrow)`
  color: ${(props) => props.theme.text.gray2};
  cursor: pointer;
  z-index: 2;
`
export const Month = styled(motion.p)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  /* background-color: tomato; */
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  color: ${(props) => props.theme.text.black2};
`
export const NextButton = styled(RightArrow)`
  color: ${(props) => props.theme.text.gray2};
  cursor: pointer;
  z-index: 2;
`

export const Body = styled.tbody`
  height: 100%;
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DayRow = styled(Row)``
const Cell = styled.td`
  padding: 0 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DayCell = styled(Cell)`
  font-size: 14px;
  font-weight: 500;
`
export const Line = styled.hr`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background.gray3};
  width: 360px;
  top: 84px;
  height: 1px;
`
export const WeekRow = styled(Row)``
type DateCellProps = {
  $currentMonth: boolean
  $isSelected: boolean
}
export const DateCell = styled(Cell)<DateCellProps>`
  border: 1px solid ${(props) => (props.$isSelected ? props.theme.primary.dark : 'none')};
  scale: ${(props) => (props.$isSelected ? 1.2 : 1)};
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
  transition: scale 0.1s ease-out;
  border-radius: 100%;
  width: 33px;
  height: 33px;
  background-color: ${(props) => (props.$currentMonth ? props.theme.primary.default : 'none')};
  color: ${(props) => (props.$currentMonth ? props.theme.text.white : props.theme.background.gray1)};
`

export const LegendContainer = styled.ul`
  display: flex;
`
export const Legend = styled.legend`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 10px;
  font-weight: 400;
  margin-right: 8px;
  &:first-child > div {
    border: 1px solid ${(props) => props.theme.background.gray3};
  }
  &:nth-child(2) > div {
    background-color: ${(props) => props.theme.primary.default};
    opacity: 0.1;
  }
  &:nth-child(3) > div {
    background-color: ${(props) => props.theme.primary.default};
    opacity: 0.6;
  }
  &:nth-child(4) > div {
    background-color: ${(props) => props.theme.primary.default};
  }
  color: ${(props) => props.theme.text.gray2};
`

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
`
export const DateContainer = styled(motion.div)`
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100% - 46px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`
