import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { IStore } from '../Root'

export const UserStore = types
  .model('user', {
    token: types.optional(types.string, ''),
  })
  .actions(self => {
    return {
      setToken(token: string) {
        self.token = token
      },
    }
  })

export const UserService = (rootStore: IStore) => (token: string) =>
  rootStore.user.setToken(token)

export type IStore = Instance<typeof UserStore>
export type IStoreSnapshotIn = SnapshotIn<typeof UserStore>
export type IStoreSnapshotOut = SnapshotOut<typeof UserStore>
