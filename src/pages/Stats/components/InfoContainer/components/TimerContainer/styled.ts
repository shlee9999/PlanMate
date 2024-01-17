import styled from 'styled-components'

type RootProps = {
  $type?: 'timer'
}
export const Root = styled.div<RootProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
`
export const TimerBox = styled.div``

export const Header = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.text.gray1};
`
export const Time = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
  color: ${(props) => props.theme.text.black1};
`
