import { IncomingMessage } from 'http';

import { Store } from './with-redux-store';

export interface AppContext {
  reduxStore: Store;
  req: IncomingMessage;
  ctx: any; // TODO: fix it
}
