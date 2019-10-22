import { addMiddleware } from 'mobx-state-tree';

import { FetchingStoreBase, handleFetching } from './fetchingStoreBase';

export const FetchingStore = FetchingStoreBase.actions(self => ({
  afterCreate() {
    addMiddleware(self, (call, next) => {
      handleFetching(call, self);

      return next(call);
    });
  },
}));
