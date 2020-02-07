import { types } from 'mobx-state-tree';

const RefModel = types.model({ _ref: types.string });

export const PhotoModel = types.model({
  _type: types.maybe(types.string),
  asset: types.maybe(RefModel),
});
