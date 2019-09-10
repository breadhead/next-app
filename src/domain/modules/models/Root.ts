import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { CounterStore } from './Counter'
import { UserStore } from './user/User'
import { HistoryStore } from './History'

export const RootStore = types.model('root', {
  book: CounterStore,
  user: UserStore,
  history: HistoryStore,
})

export type IStore = Instance<typeof RootStore>
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore>
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore>
