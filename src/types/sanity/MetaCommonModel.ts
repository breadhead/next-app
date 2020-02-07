import { Instance, types } from 'mobx-state-tree';

import { PhotoModel } from './PhotoModel';

export const MetaCommonModel = types.model({
  _key: types.maybe(types.string),
  _type: types.maybe(types.string),
  description: types.maybe(types.string),
  keywords: types.maybe(types.string),
  seo_title: types.maybe(types.string),
  social_description: types.maybe(types.string),
  social_image: types.maybe(PhotoModel),
  social_title: types.maybe(types.string),
  title: types.maybe(types.string),
});

export interface MetaCommonType extends Instance<typeof MetaCommonModel> {}
