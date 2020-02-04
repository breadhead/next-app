import { flow } from 'mobx-state-tree';

import { getApiService } from '@app/stores/root/helpers/getEnv';

import { SelfPageMetaStore } from './index';

export const loadPageMeta = (self: SelfPageMetaStore) =>
  flow(function*() {
    if (self._entities.length > 0) return;

    try {
      const pageMeta: any = yield getApiService(self).request(
        'GET',
        '/pageMeta',
      );

      self._entities = pageMeta;
    } catch (err) {
      console.log(err);
    }
  });

export const ActionsPageMeta = (self: any) => ({
  loadPageMeta: loadPageMeta(self),
});
