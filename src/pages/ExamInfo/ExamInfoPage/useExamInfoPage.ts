import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { findPostWithTag } from 'api/post/find/findPostWithTag'
import { examInfoTagList } from 'constants/tagList'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { QueryKeys } from 'types'

export const useExamInfoPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState('')
  const { data, isLoading } = useQuery<FindAllPostResponseProps>(
    [QueryKeys.findAllResponse, currentPage, selectedTag],
    () =>
      selectedTag === ''
        ? findAll({ pages: currentPage - 1 })
        : findPostWithTag({ pages: currentPage - 1, tagName: selectedTag }),
    { keepPreviousData: true }
  )
  const examInfoList = data?.postDtoList || []
  const totalPage = data?.totalPages || 0

  const navigate = useNavigate()
  const onClickBulletinButton = () => navigate('/examinfo/post', { state: { initialTag: selectedTag } })

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [data])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])
  const selectorProps = {
    selectedTag: selectedTag,
    setSelectedTag: setSelectedTag,
    tagList: [''].concat(examInfoTagList),
    selectorHeight: 30,
    selectorWidth: 150,
    title: '',
  }
  return {
    data,
    isLoading,
    examInfoList,
    totalPage,
    onClickBulletinButton,
    selectorProps,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
  }
}
