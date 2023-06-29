import { FC } from 'react'
import { Root } from './styled'
import { tabList } from 'utils/helper'
import { useSelector } from 'react-redux'
import { Globals } from 'types'

type MainSectionProps = {}

const MainSection: FC<MainSectionProps> = () => {
  const currentTab = useSelector((state: Globals) => state.currentTab)

  return (
    <Root>
      <div>{tabList[currentTab].component}</div>
    </Root>
  )
}

export default MainSection
