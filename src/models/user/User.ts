import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';
import { Option } from 'tsoption';

import { CustomOption } from '@app/lib/customOption';

import { IStore } from '../root/Root';

export const UserStore = types
  .model('user', {
    token: CustomOption,
  })
  .actions(self => {
    return {
      setToken(token: Option<string>) {
        self.token = token;
      },
    };
  });

export type IStore = Instance<typeof UserStore>;
export type IStoreSnapshotIn = SnapshotIn<typeof UserStore>;
export type IStoreSnapshotOut = SnapshotOut<typeof UserStore>;
