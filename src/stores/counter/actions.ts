import { flow } from 'mobx-state-tree';

import { getApiService } from './../root/helpers/getEnv';
import { SelfStoreCounter } from './index';

export const fetch = (self: SelfStoreCounter): (() => Promise<void>) =>
  flow(function*() {
    self.counter++;
    yield getApiService(self).request('get', '/users');
  });

export const increment = (self: SelfStoreCounter) => () => self.counter++;

export const Actions = self => ({
  increment: increment(self),
  fetch: fetch(self),
});
