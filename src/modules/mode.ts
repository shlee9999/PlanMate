const STUDY = 'timer/STUDY' as const
const EXERCISE = 'timer/EXERCISE' as const

export const study = () => ({ type: STUDY })
export const exercise = () => ({ type: EXERCISE })

type ModeAction = ReturnType<typeof study> | ReturnType<typeof exercise>

type ModeState = {
  isStudying: boolean
}

const InitialState: ModeState = {
  isStudying: true,
}

function Mode(state: ModeState = InitialState, action: ModeAction) {
  switch (action.type) {
    case STUDY:
      return { isStudying: true }
    case EXERCISE:
      return { isStudying: false }
  }
}

export default Mode
