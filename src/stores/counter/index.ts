import { types, Instance } from 'mobx-state-tree';

import { FetchingStore } from '../fetching/fetchingStore';
import { Actions } from './actions';
import { Views } from './views';

const CounterStoreSimple = types
  .model({
    value: types.string,
    counter: types.number,
  })
  .views(Views)
  .actions(Actions);

export const CounterStore = types.compose(
  CounterStoreSimple,
  FetchingStore,
);

CounterStore.name = 'counter';

export interface SelfStoreCounter extends Instance<typeof CounterStore> {}
