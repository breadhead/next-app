import { Instance, types } from 'mobx-state-tree';

import { SanityDefaultModel } from './sanity/SanityDefaultModel';
import { LocaleStringModel } from './sanity/LocaleStringModel';
import { SlugModel } from './sanity/SlugModel';
import { PhotoModel } from './sanity/PhotoModel';
import { LocalePostModel } from './sanity/LocalePostModel';
import { RefModel } from './sanity/RefModel';

export const EventModel = SanityDefaultModel.props({
  status: types.boolean,
  title: LocaleStringModel,
  subtitle: types.maybe(LocaleStringModel),
  code: SlugModel,
  image: types.maybe(PhotoModel),
  description: LocalePostModel,
  date: types.model({
    dateFrom: types.Date,
    dateTo: types.maybe(types.Date),
    timeFrom: types.maybe(types.string),
    timeTo: types.maybe(types.string),
  }),
  cafe: types.maybe(types.array(RefModel)),
});

export interface Event extends Instance<typeof EventModel> {}
