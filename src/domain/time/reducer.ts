import { ClearAction, createClearRedux } from 'redux-clear'

export interface State {
  lastUpdate: number
  count: number
}

const initialState = {
  lastUpdate: 0,
  count: 0,
} as State

export interface Actions {
  tick: ClearAction<[number]>
  increment: ClearAction
  decrement: ClearAction
  reset: ClearAction
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    tick: state => lastUpdate => ({
      ...state,
      lastUpdate,
    }),
    increment: state => () => ({ ...state, count: state.count + 1 }),
    decrement: state => () => ({ ...state, count: state.count - 1 }),
    reset: state => () => ({ ...state, count: initialState.count }),
  },
  initialState,
)

export { reducer, actions }
