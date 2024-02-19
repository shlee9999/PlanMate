import { RightArrow } from 'assets/SvgComponents'
import { H21_700, LeftArrow } from 'commonStyled'
import { ActionButton } from 'components'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const TodayButton = styled(ActionButton)`
  position: absolute;
  width: 60px;
  height: 25px;
  top: -4px;
  right: 0px;
  padding: 3px 5px;
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
export const NextButton = styled(RightArrow)<{ $isVisible: boolean }>`
  color: ${(props) => props.theme.text.gray2};
  cursor: pointer;
  z-index: 2;
  ${(props) =>
    !props.$isVisible &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`
