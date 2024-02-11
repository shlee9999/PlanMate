import { examInfoTagList } from 'constants/tagList'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExamInfoList } from '../hooks/useExamInfoList'

export const usePostContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState('')
  const navigate = useNavigate()
  const { isLoading, examInfoList, totalPage } = useExamInfoList({ currentPage, selectedTag })
  const onClickBulletinButton = () => navigate('/examinfo/post', { state: { initialTag: selectedTag } })
  const selectorProps = {
    selectedTag: selectedTag,
    setSelectedTag: setSelectedTag,
    tagList: [''].concat(examInfoTagList),
    selectorHeight: 30,
    selectorWidth: 150,
    title: '',
  }
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [examInfoList])

  return {
    isLoading,
    totalPage,
    onClickBulletinButton,
    selectorProps,
    examInfoList,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
  }
}
