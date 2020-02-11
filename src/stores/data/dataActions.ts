import { flow } from 'mobx-state-tree';
import { groupBy } from 'lodash-es';

import { getFromConfig } from '@app/core/libs/getPublicRuntimeConfig';
import { apiErrorHandler } from '@app/service/api/helper';
import { getApiService } from '@app/stores/root/helpers/getEnv';
import { AsyncFunc } from '@app/types/AsyncFunc';
import { sanityLocalize } from '@app/core/libs/sanity-localize';

import { DataStoreType } from '.';

const fetchData = (self: DataStoreType): AsyncFunc<any, any> =>
  flow(function* fetch() {
    try {
      const data = yield getApiService(self).request(
        'get',
        `${getFromConfig(
          'siteUrl',
        )}/api/query/*[_type in ["mainPageLanding", "newsLanding", "eventLanding"]]{..., "video": video.asset->url, 'cafes': cafes[] -> {...},
  'shops': shops[] -> {...}}`,
      );
      const groupedBy = groupBy(data, '_type');
      const localized = sanityLocalize(groupedBy, ['ru', 'en']);
      self._data = localized as any;
    } catch (error) {
      console.log('TCL: flow -> error', error);
      return apiErrorHandler(error);
    }
  });

export const dataActions = self => ({
  fetchData: fetchData(self),
});
