import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

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
  tick(lastUpdate: number, light: boolean): Action
  increment(): Action
  decrement(): Action
  reset(): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    tick: (state: State, lastUpdate, light) => ({
      ...state,
      lastUpdate,
      light,
    }),
    increment: state => ({ ...state, count: state.count + 1 }),
    decrement: state => ({ ...state, count: state.count - 1 }),
    reset: state => ({ ...state, count: initialState.count }),
  },
  'example',
)

export { State, reducer, Actions, actions }
