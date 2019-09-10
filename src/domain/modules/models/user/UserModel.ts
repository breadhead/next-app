import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
import { IStore } from '../Root'
import { CustomOption } from '@app/lib/customOption'
import { Option } from 'tsoption'

export const UserStore = types
  .model('user', {
    token: CustomOption,
  })
  .actions(self => {
    return {
      setToken(token: string) {
        self.token = CustomOption.create(token)
        console.log(self)
      },
    }
  })

export type IStore = Instance<typeof UserStore>
export type IStoreSnapshotIn = SnapshotIn<typeof UserStore>
export type IStoreSnapshotOut = SnapshotOut<typeof UserStore>
