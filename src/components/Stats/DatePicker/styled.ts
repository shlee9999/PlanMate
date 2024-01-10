import styled, { css } from 'styled-components'

export const DatePickerFooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainWrapper = styled.div`
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

export const Circle = styled.div<CircleProps>`
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

export const Time = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.05em;
  text-align: center;
  color: ${(props) => props.theme.text.gray2};
`
