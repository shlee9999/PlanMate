import styled, { css } from 'styled-components'

const DatePickerFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`
const MainWrapper = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface CircleProps {
  border?: string
  color?: string
}

const Circle = styled.div<CircleProps>`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  border: ${({ border }) => border || '1px solid #d9d9d9'};
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`

const Time = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #888888;
`

export { DatePickerFooterWrapper, MainWrapper, Circle, Time }
