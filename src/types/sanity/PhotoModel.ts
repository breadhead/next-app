import { types } from 'mobx-state-tree';

import { RefModel } from './RefModel';

export const PhotoModel = types.model({
  _key: types.string,
  _type: types.string,
  asset: RefModel,
});
