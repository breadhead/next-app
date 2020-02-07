import { types, Instance } from 'mobx-state-tree';

import { SanityDefaultModel } from './sanity/SanityDefaultModel';

export const MainPageResponse = SanityDefaultModel.props({
  status: types.boolean,
  video: types.frozen(),
  aboutTitle: 
});
