import { H16_700 } from 'commonStyled'
import styled from 'styled-components'

export const NoContentDescription = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DescriptionTypoContainer = styled.div`
  ${H16_700}
  margin-top: 8px;
  color: ${(props) => props.theme.text.gray3};
  text-align: center;
`

export const NoContentTypo = styled.p``
