import { FC } from 'react'
import { Root } from './styled'
import { useSelector } from 'react-redux'
import { tabList } from 'constants/tabList'
import { RootState } from 'modules'

const MainSection: FC = () => {
  const currentTab = useSelector((state: RootState) => state.tab.currentTab)

  return (
    <Root>
      <div>{tabList[currentTab].component}</div>
    </Root>
  )
}

export default MainSection
