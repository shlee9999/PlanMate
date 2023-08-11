import { ExamInfoItem } from 'components/ExamInfo/ExamInfoItem'
import {
  BulletinButton,
  BulletinIcon,
  ExamInfoWrapper,
  LowerDescriptionTypo,
  LowerTagButtonWrapper,
  NoPostTypo,
  Root,
  Tag,
  TagButton,
  TitleTypo,
  TypoWrapper,
  UpperDescriptionTypo,
  UpperTagButtonWrapper,
} from './styled'
import { useEffect, useState } from 'react'
import { ResponsePostType } from 'api/common/commonType'
import sampleInfoList from 'constants/sampleInfoList.json'

import { useLoaderData, useNavigate } from 'react-router-dom'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { tagList } from 'constants/tagList'
import { Pagination } from 'components/ExamInfo/Pagination'
import { FindPostWithTagResponseProps, findPostWithTag } from 'api/post/find/findPostWithTag'
import { FindPostResponseProps } from 'api/post/find/findPost'

export const ExamInfoPage = () => {
  const data = useLoaderData() as FindAllPostResponseProps
  const [examInfoList, setExamInfoList] = useState<ResponsePostType[]>(data.postDtoList)
  // const [examInfoList, setExamInfoList] = useState<ResponsePostType[]>(sampleInfoList.postInfoList) //서버 꺼져있어도 되도록
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(data.totalPages)
  const [selectedTag, setSelectedTag] = useState<string>('')
  const handleCurrentPage = (page: number) => (): void => {
    setCurrentPage(page)
  }

  const loadPrevPage = (): void => {
    if (currentPage >= 1) setCurrentPage((prev) => prev - 1)
  }
  const loadNextPage = (): void => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1)
  }
  const navigate = useNavigate()

  const onClickBulletinButton = (): void => {
    navigate('/examinfo/post')
  }

  const onClickTagButton = (tag: string) => () => {
    if (selectedTag === tag) setSelectedTag('')
    else setSelectedTag(tag)
    setCurrentPage(1)
  }
  useEffect(() => {
    if (selectedTag === '')
      findAll({ pages: currentPage - 1 }).then((res: unknown) => {
        const response = res as FindAllPostResponseProps
        setExamInfoList(response.postDtoList)
        setTotalPage(response.totalPages)
      })
    else
      findPostWithTag({
        tagName: selectedTag,
        pages: currentPage - 1,
      }).then((res) => {
        const response = res as FindPostWithTagResponseProps
        setExamInfoList(response.postDtoList)
        setTotalPage(response.totalPages)
      })
  }, [currentPage, selectedTag])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [examInfoList])

  return (
    <Root>
      <TypoWrapper>
        <UpperDescriptionTypo>유용한 정보를 찾아볼까요? </UpperDescriptionTypo>
        <TitleTypo>수험정보 👀</TitleTypo>
        <LowerDescriptionTypo>보고싶은 주제를 선택해보세요!</LowerDescriptionTypo>
      </TypoWrapper>
      <UpperTagButtonWrapper>
        {tagList.map((tag, index) =>
          index > 5 ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(tagList[index])}
            >
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </UpperTagButtonWrapper>
      <LowerTagButtonWrapper>
        {tagList.map((tag, index) =>
          index <= 5 ? null : (
            <TagButton
              key={index}
              className={tag === selectedTag ? 'isSelected' : ''}
              onClick={onClickTagButton(tagList[index])}
            >
              <Tag>{tag}</Tag>
            </TagButton>
          )
        )}
      </LowerTagButtonWrapper>
      <ExamInfoWrapper>
        {examInfoList.length !== 0 ? (
          examInfoList.map((examInfo) => <ExamInfoItem {...examInfo} key={examInfo.postId} />)
        ) : (
          <NoPostTypo>등록된 게시물이 없습니다</NoPostTypo>
        )}
        {/* {sampleInfoList.postInfoList.map((sampleInfo, index) => (
        <ExamInfoItem {...sampleInfo} key={index} />
      ))} */}

        <BulletinButton onClick={onClickBulletinButton}>
          <BulletinIcon />
          글쓰기
        </BulletinButton>
      </ExamInfoWrapper>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onClickLeftArrow={loadPrevPage}
        onClickRightArrow={loadNextPage}
        onClickPageNumber={handleCurrentPage}
      />
    </Root>
  )
}
