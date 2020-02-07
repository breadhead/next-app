import { Instance, types } from 'mobx-state-tree';

import { DataActions } from './dataActions';

export const DataStore = types
  .model({
    _data: types.frozen(),
  })
  .actions(DataActions);

export interface SelfDataStore extends Instance<typeof DataStore> {}
