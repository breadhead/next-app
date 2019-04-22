import { IncomingMessage, OutgoingMessage } from 'http'

import { Store } from './store/Store'

interface Params {
  [key: string]: string
}

interface Response {
  statusCode: number
  writeHead: (code: number, params: Params) => void
}

interface Request {
  cookies: Params
}

export interface AppContext<Query = never> {
  reduxStore: Store
  query: Query
  req: IncomingMessage & Request
  res: OutgoingMessage & Response
}
