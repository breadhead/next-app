import { types } from 'mobx-state-tree';

export const SlugModel = types.model({
  _type: types.string,
  current: types.union(types.string, types.boolean),
});
