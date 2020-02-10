import { Instance, types } from 'mobx-state-tree';

import { LocalePostModel } from './sanity/LocalePostModel';
import { LocaleStringModel } from './sanity/LocaleStringModel';
import { PhotoModel } from './sanity/PhotoModel';
import { SanityDefaultModel } from './sanity/SanityDefaultModel';
import { SlugModel } from './sanity/SlugModel';

export const EventModel = SanityDefaultModel.props({
  status: types.boolean,
  title: LocaleStringModel,
  subtitle: types.maybe(LocaleStringModel),
  code: SlugModel,
  image: types.array(PhotoModel),
  description: LocalePostModel,
  date: types.model({
    dateFrom: types.string,
    dateTo: types.maybe(types.string),
    timeFrom: types.maybe(types.string),
    timeTo: types.maybe(types.string),
  }),
});

export interface EventType extends Instance<typeof EventModel> {}
