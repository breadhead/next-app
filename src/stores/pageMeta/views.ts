import { getSnapshot } from 'mobx-state-tree';

import { PageMeta } from '@app/types/PageMeta';

export const Views = self => ({
  get entities(): PageMeta {
    return getSnapshot(self._entities);
  },
});
