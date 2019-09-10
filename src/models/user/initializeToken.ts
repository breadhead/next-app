import { Option } from 'tsoption';

import { IStore } from '../root/Root';

export const initializeToken = (store: IStore, token: Option<string>) => {
  if (token.nonEmpty()) {
    store.user.setToken(token);
  }
};
