import styled from 'styled-components'
import { RightArrow } from 'assets/SvgComponents'
import { H14_500, H21_700, LeftArrow, P10, P12, P14 } from 'commonStyled'
import { motion } from 'framer-motion'

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
export const Row = styled.div`
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
