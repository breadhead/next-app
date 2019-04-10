import { createSelector } from 'reselect'

import { State } from '@app/domain/store/store'

import { State as ExampleState } from './reducer'

export const getAll = createSelector<State, ExampleState, ExampleState>(
  state => state.example,
  state => state,
)
