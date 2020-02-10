import { Instance, types } from 'mobx-state-tree';

import {
  MainPageResponseModel,
  MainPageResponseRawModel,
} from '@app/types/MainPageResponse';
import { NewsModel } from '@app/types/News';
import { EventModel } from '@app/types/Events';
import { DataType } from '@app/types/DataType';

import { DataActions } from './dataActions';

export const DataStoreModel = types
  .model({
    _data: types.maybe(
      types.model({
        [DataType.mainPage]: types.array(MainPageResponseRawModel),
        [DataType.news]: types.array(NewsModel),
        [DataType.events]: types.array(EventModel),
      }),
    ),
  })
  .actions(DataActions);

export interface DataStoreType extends Instance<typeof DataStoreModel> {}
