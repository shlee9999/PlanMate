import styled from 'styled-components'
import { RightArrow } from 'assets/SvgComponents'
import { H14_500, H21_700, LeftArrow, P10, P12, P14 } from 'commonStyled'
import { motion } from 'framer-motion'
import { Tooltip } from './Tooltip'
import { DESKTOP_DATE_CELL_SIZE, MOBILE_DATE_CELL_SIZE, TABLET_DATE_CELL_SIZE } from 'constants/dateCellSize'

export const Calendar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
`
export const YearHeader = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`
export const MonthHeader = styled.div<{ $layout: 'space-between' | 'center' }>`
  display: flex;
  justify-content: ${(props) => props.$layout};
  align-items: center;
  gap: 60px;
  margin-bottom: 18px;
`
export const PrevButton = styled(LeftArrow)`
  color: ${(props) => props.theme.text.gray2};
  cursor: pointer;
  z-index: 2;
`
export const Month = styled(motion.p)<{ $layout: 'space-between' | 'center' }>`
  ${H21_700}
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.$layout === 'space-between' ? '-2px' : '-3px')};
  margin: 0 auto;
  text-align: center;
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
export const DayRow = styled(Row)`
  position: relative;
  padding: 0 10px;
  @media screen and (${(props) => props.theme.medium}) {
    padding: 0;
  }
`
export const Cell = styled.div`
  ${P12}
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DayCell = styled(Cell)`
  ${P14}
`
export const Line = styled.hr`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background.gray3};
  width: 100%;
  height: 1px;
`
export const WeekRow = styled(Row)``

export const LegendContainer = styled.ul`
  display: flex;
  align-self: flex-end;
  @media screen and (${(props) => props.theme.medium}) {
    display: none;
  }
`
export const Legend = styled.legend`
  display: flex;
  align-items: center;
  gap: 2px;
  ${P10}
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
export const DateContainerWrapper = styled.div`
  position: absolute;
  top: 80px;
  overflow: hidden;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  height: calc(100% - 70px);
`
export const DateContainer = styled(motion.div)`
  padding: 4px 10px 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.xlarge}) {
    width: ${DESKTOP_DATE_CELL_SIZE}px;
    height: ${DESKTOP_DATE_CELL_SIZE}px;
  }
  @media screen and (${(props) => props.theme.large}) {
    width: ${TABLET_DATE_CELL_SIZE}px;
    height: ${TABLET_DATE_CELL_SIZE}px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    width: ${MOBILE_DATE_CELL_SIZE}px;
    height: ${MOBILE_DATE_CELL_SIZE}px;
  }
  &.current {
    background-color: ${(props) => bgColor[props.$index]};
    color: ${(props) => (props.$isSelected ? props.theme.text.white : textColor[props.$index])};
    scale: ${(props) => (props.$isSelected ? 1.2 : 1)};
    &:hover {
      scale: 1.2;
    }
    /* border: 1px solid ${(props) => (props.$isSelected ? props.theme.primary.dark : 'none')}; */
    transition: scale 0.1s ease-out;
    border-radius: 100%;
    background-color: ${(props) => (props.$isSelected ? props.theme.primary.default : '')};

    opacity: ${(props) => bgColor[props.$index]};
  }

  &.prev {
    color: ${(props) => props.theme.background.gray1};
  }

  &.next {
    opacity: 0;
    pointer-events: none;
  }
  &.today {
    border-radius: 50%;
    background-color: #0088fe;
    color: ${(props) => props.theme.text.white};
    scale: 1.3;
    &:hover {
      scale: 1.3;
    }
  }
`
export const TodayButton = styled.button`
  position: absolute;
  top: -2.5px;
  right: 60px;
  ${H14_500}
  color: ${(props) => props.theme.text.gray1};
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(1);
  }
  border: 2px solid ${(props) => props.theme.border.dark};
  border-radius: 8px;
  padding: 3px 5px;
`
export const DateCellWrapper = styled.div`
  position: relative;
`

//Tooltip
export const TooltipRoot = styled(motion.div)`
  ${P12}
  position: absolute;
  background-color: rgb(255, 249, 219);
  border: 1px solid rgba(205, 133, 63, 0.3);
  color: rgba(205, 133, 63, 0.7);
  border-radius: 8px;
  width: 150px;
  padding: 15px 10px;
  &::after {
    position: absolute;
    content: '';
    background-color: rgb(255, 249, 219);
    width: 10px;
    height: 10px;
    bottom: -6px;
    left: 10px;
    transform: rotate(45deg);
    border-bottom: 1px solid rgba(205, 133, 63, 0.3);
    border-right: 1px solid rgba(205, 133, 63, 0.3);
    border-top: 0;
    border-left: 0;
  }
`

export const StyledTooltip = styled(Tooltip)`
  top: -10px;
  left: 0;
`
