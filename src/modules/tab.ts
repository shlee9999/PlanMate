const CHANGE_TAB = 'timer/CHANGE_TAB' as const

export const changeTab = (currentTab: number) => ({ type: CHANGE_TAB, payload: currentTab })

type TabAction = ReturnType<typeof changeTab>

type TabState = {
  currentTab: number
}

const InitialState: TabState = {
  currentTab: 0,
}

function Tab(state: TabState = InitialState, action: TabAction) {
  switch (action.type) {
    case CHANGE_TAB:
      return { currentTab: action.payload }
  }
}

export default Tab
