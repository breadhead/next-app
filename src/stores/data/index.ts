import { Instance, types } from 'mobx-state-tree';

import { DataType } from '@app/types/DataType';
import { EventModel } from '@app/types/Events';
import { MainPageResponseModel } from '@app/types/MainPageResponse';
import { NewsModel } from '@app/types/News';

import { DataActions } from './dataActions';

export const DataStoreModel = types
  .model({
    _data: types.maybe(
      types.model({
        [DataType.mainPage]: types.array(MainPageResponseModel),
        [DataType.news]: types.array(NewsModel),
        [DataType.events]: types.array(EventModel),
      }),
    ),
  })
  .actions(DataActions);

export interface DataStoreType extends Instance<typeof DataStoreModel> {}
