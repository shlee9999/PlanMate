import { InfoBox } from 'components'
import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  /* min-height: fit-content; */
  @media screen and (${(props) => props.theme.large}) {
    flex-direction: column;
  }
`
export const LeftInfoBox = styled(InfoBox)`
  position: relative;
  min-width: 0px;
  flex: 1 1 400px;
  max-width: 420px;
  overflow: hidden;
  padding: 24px 25px;
  height: 450px;
  @media screen and (${(props) => props.theme.large}) {
    width: 100%;
    max-width: none;
  }
  @media screen and (${(props) => props.theme.medium}) {
    height: 100px !important;
  }
`
export const RightInfoBox = styled(InfoBox)`
  min-width: 0;
  flex-grow: 1;
  flex-shrink: 4;

  @media screen and (${(props) => props.theme.large}) {
    width: 100%;
    flex-grow: 1;
    height: 450px;
  }
  @media screen and (${(props) => props.theme.medium}) {
    height: fit-content;
  }
  overflow: visible;
`
