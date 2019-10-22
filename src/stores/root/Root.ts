import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

import { CounterStore } from '../counter';

export const RootStore = types.model('root', {
  counter: CounterStore,
});

export type IStore = Instance<typeof RootStore>;
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>;
