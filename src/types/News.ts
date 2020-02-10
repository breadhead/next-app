import { Instance, types } from 'mobx-state-tree';

import { SanityDefaultModel } from './sanity/SanityDefaultModel';
import { LocaleStringModel } from './sanity/LocaleStringModel';
import { SlugModel } from './sanity/SlugModel';
import { PhotoModel } from './sanity/PhotoModel';
import { LocalePostModel } from './sanity/LocalePostModel';
import { RefModel } from './sanity/RefModel';

export const NewsModel = SanityDefaultModel.props({
  status: types.boolean,
  title: LocaleStringModel,
  subtitle: types.maybe(LocaleStringModel),
  code: SlugModel,
  image: types.array(PhotoModel),
  description: LocalePostModel,
  date: types.string,
  cafe: types.maybe(types.array(RefModel)),
});

export interface News extends Instance<typeof NewsModel> {}
