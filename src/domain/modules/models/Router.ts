import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { BaseRouter } from 'next-server/dist/lib/router/router'

export const RouterStore = types
  .model('router', {
    route: types.string,
    pathname: types.string,
    query: types.frozen(),
    asPath: types.string,
  })
  .actions(self => {
    return {
      unit(baseRouter: BaseRouter) {
        self.route = baseRouter.route
        self.pathname = baseRouter.pathname
        self.asPath = baseRouter.asPath
        self.query = baseRouter.query
      },
    }
  })

export default undefined
