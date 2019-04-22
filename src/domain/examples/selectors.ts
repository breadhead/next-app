import { createSelector } from 'reselect'

import { State as ExampleState } from './reducer'
import { State } from '../store/State'

export const getAll = createSelector<State, ExampleState, ExampleState>(
  state => state.examples,
  state => state,
)
