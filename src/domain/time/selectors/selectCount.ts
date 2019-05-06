import { State } from '@app/domain/store/State'
import { Option } from 'tsoption'

export const selectCount = (state: State) => Option.of(state.time.count)
