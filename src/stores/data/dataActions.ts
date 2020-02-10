import { flow } from 'mobx-state-tree';
import { groupBy } from 'lodash-es';

import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';
import { apiErrorHandler } from '@app/service/api/helper';
import { getApiService } from '@app/stores/root/helpers/getEnv';

import { DataStoreType } from '.';

const fetchData = (self: DataStoreType): any =>
  flow(function* fetch() {
    try {
      const data = yield getApiService(self).request(
        'get',
        `${getFromConfig(
          'siteUrl',
        )}/api/query/*[_type in ["mainPageLanding", "newsLanding", "eventLanding"]]{..., 'cafes': cafes[] -> {...},
  'shops': shops[] -> {...}}`,
      );
      const groupedBy = groupBy(data, '_type');
      console.log('TCL: groupedBy', groupedBy);
      self._data = groupedBy as any;
    } catch (error) {
      console.log('TCL: flow -> error', error);
      return apiErrorHandler(error);
    }
  });

export const DataActions = self => ({
  fetchData: fetchData(self),
});
