import styled from 'styled-components'
import { Row } from 'components/Calendar/styled'
import { motion } from 'framer-motion'
import { P10 } from 'commonStyled'

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
