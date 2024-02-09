import { FlexRow, H21_700, H14_700, P12, PageRoot } from 'commonStyled'
import { ALLOW_SELECT } from 'constants/blockSelect'
import styled from 'styled-components'

export const PrivacyPolicy = styled(PageRoot)`
  ${ALLOW_SELECT}
`

export const PageHeader = styled(FlexRow)`
  ${H21_700}
  p {
    position: relative;
    bottom: 4px;
  }
  margin-bottom: 37px;
`
export const Logo = styled.img``
export const TermsContainer = styled.div`
  padding: 0 50px;
`
export const TermsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 50px 0;
`
export const Title = styled.p`
  ${H14_700}
  color: ${(props) => props.theme.text.black2};
`
export const DefaultList = styled.ul`
  margin-left: 24px;
  li {
    line-height: 19px;
  }
`
export const OrderedList = styled.ol`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  padding-left: 13px;
  list-style-type: decimal;
  margin-left: 24px;
  li {
    list-style-type: decimal;
    line-height: 19px;
  }
`

export const UnorderedList = styled.ul`
  padding-left: 13px;
  list-style-type: disc;
  margin-left: 24px;
  li {
    list-style-type: disc;
    line-height: 19px;
  }
`
export const Description = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
  white-space: pre-line;
  & > ${UnorderedList}:first-child, & > ${OrderedList}:first-child, & > ${DefaultList}:first-child {
    margin-left: 0;
  }
`
export const ListTitle = styled(Description)`
  margin-bottom: 10px;
`

export const ListItem = styled.li`
  ul,
  ol {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const PostScript = styled.p`
  ${P12}
  color: ${(props) => props.theme.text.gray1};
`
