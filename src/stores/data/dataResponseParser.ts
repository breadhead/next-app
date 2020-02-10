import { groupBy } from 'lodash-es';

import { MainPageResponseRaw } from '@app/types/MainPageResponse';
import { News } from '@app/types/News';
import { EventType } from '@app/types/Events';

export const dataResponseParser = (
  data: (MainPageResponseRaw | EventType | News)[],
) => {
  return groupBy(data, '_type');
};
