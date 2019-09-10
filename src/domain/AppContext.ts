import { IncomingMessage, OutgoingMessage } from 'http';

interface Params {
  [key: string]: string;
}

interface Response {
  statusCode: number;
  writeHead: (code: number, params: Params) => void;
}

interface Request {
  cookies: Params;
}

export interface AppContext<Query = never> {
  query: Query;
  req: IncomingMessage & Request;
  res: OutgoingMessage & Response;
}
