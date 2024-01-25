import { FC } from 'react'
import * as s from './styled'

type TTagContainerProps = {
  className?: string
  tagList: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export const TTagContainer: FC<TTagContainerProps> = ({ className, tagList, selectedTag, setSelectedTag }) => {
  const onClickTag = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
  }
  return (
    <s.TTagContainer on="TABLET">
      <s.TagButtonContainer>
        {tagList.map((tag, index) =>
          index >= 8 ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.TagButtonContainer>
      <s.TagButtonContainer>
        {tagList.map((tag, index) =>
          index < 8 ? null : (
            <s.TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTag(tagList[index])}
            >
              <s.Tag>{tag}</s.Tag>
            </s.TagButton>
          )
        )}
      </s.TagButtonContainer>
    </s.TTagContainer>
  )
}
