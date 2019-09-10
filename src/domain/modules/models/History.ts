import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { BaseRouter } from 'next-server/dist/lib/router/router'

export const HistoryStore = types
  .model('history', {
    route: types.string,
    pathname: types.string,
    query: types.frozen(),
    asPath: types.string,
  })
  .actions(self => {
    return {
      update(baseRouter: BaseRouter) {
        self.route = baseRouter.route
        self.pathname = baseRouter.pathname
        self.asPath = baseRouter.asPath
        self.query = baseRouter.query
      },
    }
  })
