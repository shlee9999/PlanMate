import { H12_500, P16 } from 'commonStyled'
import styled from 'styled-components'

export const StatsRoot = styled.div`
  position: relative;
  height: 100%;
  padding: 22px 24px 0 24px; /*BumpGraph 자체 바텀 마진이 있음 */
  display: flex;
  flex-direction: column;
`
export const TimerRoot = styled.div`
  padding: 8px 15px;
`
export const CompareTimer = styled.div`
  ${H12_500}
  color: ${(props) => props.theme.text.black2};
  margin-bottom: 16px;
`

export const Header = styled.p`
  ${P16}
  align-self: flex-start;
  padding-bottom: 10px;
`

export const StudyContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
  @media screen and (${(props) => props.theme.tablet}) {
    //* Display로 설정 시 한 번 더 감싸져서 부모 height을 못받는 문제 발생
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
  }
  margin-bottom: 20px;
`

export const TStudyContainer = styled(StudyContainer)`
  height: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`
