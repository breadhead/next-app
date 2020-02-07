import { types, Instance } from 'mobx-state-tree';

import { LocaleStringModel } from './sanity/LocaleStringModel';
import { RefModel } from './sanity/RefModel';
import { SanityDefaultModel } from './sanity/SanityDefaultModel';
import { VideoModel } from './sanity/VideoModel';
import { ShopModel } from './Shop';

export const MainPageResponseRawModel = SanityDefaultModel.props({
  status: types.boolean,
  video: VideoModel,
  eventsTitle: LocaleStringModel,
  cafes: types.array(RefModel),
  shops: types.array(RefModel),
});

export const MainPageResponseModel = MainPageResponseRawModel.props({
  cafes: types.array(ShopModel),
  shops: types.array(ShopModel),
});

export interface MainPageResponseRaw
  extends Instance<typeof MainPageResponseRawModel> {}
export interface MainPageResponse
  extends Instance<typeof MainPageResponseModel> {}
