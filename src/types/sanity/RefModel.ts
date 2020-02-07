import { types } from 'mobx-state-tree';

export const RefModel = types.model({
  _type: types.literal('reference'),
  _key: types.maybe(types.string),
  _ref: types.string,
});
