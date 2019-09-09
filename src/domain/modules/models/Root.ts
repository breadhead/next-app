import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { CounterStore } from './Counter'
import { UserStore } from './user/UserModel'

export const RootStore = types.model('root', {
  book: CounterStore,
  user: UserStore,
})

export type IStore = Instance<typeof RootStore>
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>
