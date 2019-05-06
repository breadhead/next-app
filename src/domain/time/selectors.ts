import { createSelector } from 'reselect'

import { State as TimeState } from './reducer'
import { State } from '../store/State'

export const selectAll = createSelector<State, TimeState, TimeState>(
  state => state.time,
  state => state,
)
