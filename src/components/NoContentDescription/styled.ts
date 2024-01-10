import styled from 'styled-components'

export const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
`

export const DescriptionTypoContainer = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${(props) => props.theme.text.gray3};
  text-align: center;
`

export const NoContentTypo = styled.p``
