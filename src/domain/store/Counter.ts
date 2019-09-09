import { values } from 'mobx';
import { types, getParent, flow, Instance } from 'mobx-state-tree';

export const Counter = types
  .model('book', {
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
        (self as any).counter++;
      },
    };
  });
