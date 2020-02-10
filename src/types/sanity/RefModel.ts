import { types } from 'mobx-state-tree';

export const RefModel = types.model({
  _type: types.string,
  _ref: types.string,
});
