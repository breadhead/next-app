import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

import { ModalStore } from '../modal/Modal';
import { PageMetaStore } from '../pageMeta';
import { DataStoreModel } from '../data';

export const RootStore = types.model('root', {
  modal: ModalStore,
  pageMeta: PageMetaStore,
  data: DataStoreModel,
});

export interface SelfRootStore extends Instance<typeof RootStore> {}
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>;
