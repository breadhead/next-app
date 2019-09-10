import { types, flow } from 'mobx-state-tree';

import { getEnv } from '@app/lib/getEnv';

export const CounterStore = types
  .model('counter', {
    value: types.string,
    counter: types.number,
  })
  .views(self => ({
    get counterValue() {
      return self.counter;
    },
  }))
  .actions(self => {
    return {
      increment() {
        self.counter++;
      },
      fetch: flow(function* fetch() {
        const result = yield getEnv(self).api.get('/users');

        return result;
      }),
    };
  });
