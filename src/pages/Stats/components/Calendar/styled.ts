import { RightArrow } from 'assets/SvgComponents'
import { LeftArrow } from 'commonStyled'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 24px 25px;
  height: 400px;
  min-width: 300px;
  max-width: 420px;
`
export const Header = styled.div`
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

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DayRow = styled(Row)``
export const Cell = styled.div`
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

export const LegendContainer = styled.ul`
  position: absolute;
  right: 18px;
  bottom: 15px;
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

//DateCell

type DateCellProps = {
  $isSelected: boolean
  $index?: number
}
const bgColor = ['transparent', 'rgba(1, 203, 69, 0.1)', 'rgba(1, 203, 69, 0.6)', 'rgba(1, 203, 69, 1)']
const textColor = ['black', 'black', 'white', 'white']
export const DateCellRoot = styled(Cell)<DateCellProps>`
  cursor: pointer;
  width: 33px;
  height: 33px;

  &.current {
    background-color: ${(props) => bgColor[props.$index]};
    color: ${(props) => textColor[props.$index]};
    scale: ${(props) => (props.$isSelected ? 1.2 : 1)};
    &:hover {
      scale: 1.2;
    }
    /* border: 1px solid ${(props) => (props.$isSelected ? props.theme.primary.dark : 'none')}; */
    transition: scale 0.1s ease-out;
    border-radius: 100%;
    background-color: ${(props) => (props.$isSelected ? props.theme.primary.dark : '')};

    opacity: ${(props) => bgColor[props.$index]};
    color: ${(props) => textColor[props.$index]};
  }

  &.prev {
    color: ${(props) => props.theme.background.gray1};
  }

  &.next {
    opacity: 0;
    pointer-events: none;
  }
`
