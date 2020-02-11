import { Instance, types } from 'mobx-state-tree';

import { DataType } from '@app/types/DataType';
import { EventModel } from '@app/types/Events';
import { MainPageResponseModel } from '@app/types/MainPageResponse';
import { NewsModel } from '@app/types/News';

import { dataActions } from './dataActions';
import { dataViews } from './dataViews';

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
  .views(dataViews)
  .actions(dataActions);

export interface DataStoreType extends Instance<typeof DataStoreModel> {}
export type DataStoreTypeNonNullable = NonNullable<DataStoreType['_data']>;
