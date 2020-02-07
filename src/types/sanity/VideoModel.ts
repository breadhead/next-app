import { types } from 'mobx-state-tree';

import { RefModel } from './RefModel';

export const VideoModel = types.model({
  _type: types.literal('file'),
  asset: RefModel,
});
