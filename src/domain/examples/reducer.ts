import { ClearAction, createClearRedux } from 'redux-clear'

interface State {
  lastUpdate: number
  light: boolean
  count: number
}

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
} as State

interface Actions {
  tick: ClearAction<[number, boolean]>
  increment: ClearAction
  decrement: ClearAction
  reset: ClearAction
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    tick: state => (lastUpdate, light) => ({
      ...state,
      lastUpdate,
      light,
    }),
    increment: state => () => ({ ...state, count: state.count + 1 }),
    decrement: state => () => ({ ...state, count: state.count - 1 }),
    reset: state => () => ({ ...state, count: initialState.count }),
  },
  initialState,
)

export { State, reducer, Actions, actions }
