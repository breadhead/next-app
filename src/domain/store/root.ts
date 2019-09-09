import makeInspectable from 'mobx-devtools-mst';
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
} from 'mobx-state-tree';

import { Counter } from './Counter';

let store: IStore = null as any;

const RootStore = types.model({
  book: Counter,
});

export type IStore = Instance<typeof RootStore>;
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>;

export const initializeStore = (isServer: boolean, snapshot = null) => {
  if (isServer) {
    store = RootStore.create({ book: { value: '', counter: 234 } });
  }
  if ((store as any) === null) {
    store = RootStore.create({ book: { value: '', counter: 234 } });
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  makeInspectable(store);
  return store;
};
