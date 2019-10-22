import stringify from 'json-stringify-safe';
import { head } from 'lodash';
import { types, IMiddlewareEvent, Instance } from 'mobx-state-tree';

export const FetchingStoreBase = types
  .model({
    fetching: types.optional(types.boolean, false),
    error: types.optional(types.frozen(), false),
  })
  .actions(self => ({
    setError(error: any) {
      self.error = error;
    },
    setFetching(fetching: boolean) {
      self.fetching = fetching;
    },
  }));

export interface SelfFetchingStore extends Instance<typeof FetchingStoreBase> {}

export function handleFetching(
  call: IMiddlewareEvent,
  self: SelfFetchingStore,
) {
  // prevent parent stores reacting on child store fetching actions
  if (call.context === self) {
    switch (call.type) {
      case 'flow_spawn':
        self.setFetching(true);
        self.setError(false);
        break;
      case 'flow_return':
        self.setFetching(false);
        break;

      case 'flow_resume_error':
      case 'flow_throw':
        const error = head(JSON.parse(stringify(call.args)));
        self.setError(error);
        self.setFetching(false);
        break;

      default:
        break;
    }
  }
}
