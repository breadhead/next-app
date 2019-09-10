import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { CounterStore } from './Counter'
import { UserStore } from './user/User'
import { RouterStore } from './Router'

export const RootStore = types.model('root', {
  book: CounterStore,
  user: UserStore,
  router: RouterStore,
})

export type IStore = Instance<typeof RootStore>
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>
