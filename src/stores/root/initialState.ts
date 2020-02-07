import { initialState as pageMetaInitialState } from '@app/stores/pageMeta/initialState';
import { initialState as modalInitialState } from '@app/stores/modal/initialState';

import { dataInitialState } from '../data/dataInitialState';

export const InitialStateRoot = {
  modal: modalInitialState,
  pageMeta: pageMetaInitialState,
  data: dataInitialState,
};
