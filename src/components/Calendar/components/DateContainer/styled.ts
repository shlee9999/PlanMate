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
