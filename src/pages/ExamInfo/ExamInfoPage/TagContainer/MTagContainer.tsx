import { FC } from 'react'
import * as s from './styled'
import { TagSelector } from 'pages/ExamInfo/components'

type MTagContainerProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
  title?: string
}

export const MTagContainer: FC<MTagContainerProps> = ({
  className,
  tagList,
  selectedTag,
  setSelectedTag,
  title = '태그',
}) => {
  return (
    <s.MTagContainer on="MOBILE" className={className}>
      <TagSelector
        tagList={[''].concat(tagList)}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        title=""
        selectorWidth={150}
        selectorHeight={30}
      />
    </s.MTagContainer>
  )
}
