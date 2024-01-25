import { FC } from 'react'
import * as s from './styled'
import { examInfoTagList } from 'constants/tagList'

type TagContainerProps = {
  className?: string
  onClickTag: (tag: string) => () => void
  selectedTag: string
}

export const TagContainer: FC<TagContainerProps> = ({ className, onClickTag: onClickTagButton, selectedTag }) => {
  return (
    <>
      <s.DTagContainer on="DESKTOP">
        <s.TagButtonContainer>
          {examInfoTagList.map((tag, index) =>
            index > 5 ? null : (
              <s.TagButton
                key={index}
                className={tag === selectedTag ? 'isSelected' : ''}
                onClick={onClickTagButton(examInfoTagList[index])}
              >
                <s.Tag>{tag}</s.Tag>
              </s.TagButton>
            )
          )}
        </s.TagButtonContainer>
        <s.TagButtonContainer>
          {examInfoTagList.map((tag, index) =>
            index <= 5 ? null : (
              <s.TagButton
                key={index}
                className={tag === selectedTag ? 'isSelected' : ''}
                onClick={onClickTagButton(examInfoTagList[index])}
              >
                <s.Tag>{tag}</s.Tag>
              </s.TagButton>
            )
          )}
        </s.TagButtonContainer>
      </s.DTagContainer>
      <s.TTagContainer on="TABLET">
        <s.TagButtonContainer>
          {examInfoTagList.map((tag, index) =>
            index >= 8 ? null : (
              <s.TagButton
                key={index}
                className={tag === selectedTag ? 'isSelected' : ''}
                onClick={onClickTagButton(examInfoTagList[index])}
              >
                <s.Tag>{tag}</s.Tag>
              </s.TagButton>
            )
          )}
        </s.TagButtonContainer>
        <s.TagButtonContainer>
          {examInfoTagList.map((tag, index) =>
            index < 8 ? null : (
              <s.TagButton
                key={index}
                className={tag === selectedTag ? 'isSelected' : ''}
                onClick={onClickTagButton(examInfoTagList[index])}
              >
                <s.Tag>{tag}</s.Tag>
              </s.TagButton>
            )
          )}
        </s.TagButtonContainer>
      </s.TTagContainer>
      <s.MTagContainer on="MOBILE">TagSelector</s.MTagContainer>
    </>
  )
}
