import { Api } from './Api'
import { Option } from 'tsoption'
import { RealApi } from './RealApi'

export const createApi = (token: Option<string>, real: boolean = true) => {
  if (!real) {
    return new Api(token)
  }

  return new RealApi(token)
}