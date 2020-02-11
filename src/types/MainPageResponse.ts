import { Instance, types } from 'mobx-state-tree';

import { LocaleStringModel } from './sanity/LocaleStringModel';
import { ShopModel } from './Shop';
import { SanityDefaultModel } from './sanity/SanityDefaultModel';

export const MainPageResponseModel = SanityDefaultModel.props({
  status: types.boolean,
  video: types.string,
  eventsTitle: LocaleStringModel,
  cafes: types.array(ShopModel),
  shops: types.array(ShopModel),
});

export interface MainPageResponse
  extends Instance<typeof MainPageResponseModel> {}
