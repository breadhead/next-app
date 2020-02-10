import { Instance, types } from 'mobx-state-tree';

import { LocalePostModel } from './sanity/LocalePostModel';
import { LocaleStringModel } from './sanity/LocaleStringModel';
import { PhotoModel } from './sanity/PhotoModel';
import { SanityDefaultModel } from './sanity/SanityDefaultModel';
import { SlugModel } from './sanity/SlugModel';
import { ShopModel } from './Shop';

export const NewsModel = SanityDefaultModel.props({
  status: types.boolean,
  title: LocaleStringModel,
  subtitle: types.maybe(LocaleStringModel),
  code: SlugModel,
  image: types.array(PhotoModel),
  description: LocalePostModel,
  date: types.string,
  cafe: types.maybe(types.array(ShopModel)),
});

export interface News extends Instance<typeof NewsModel> {}
