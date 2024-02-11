import { H21_700, P12, PageRoot } from 'commonStyled'
import styled from 'styled-components'

export const ExamInfoPage = styled(PageRoot)`
  min-width: auto;
`
const DescriptionTypo = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.black2};
`

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleTypo = styled.p`
  ${H21_700}
  color: ${(props) => props.theme.text.black2};
  margin-bottom: 24px;
`

export const UpperDescriptionTypo = styled(DescriptionTypo)``
export const LowerDescriptionTypo = styled(DescriptionTypo)``
