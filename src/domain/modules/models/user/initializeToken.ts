import { Option } from 'tsoption'
import { IStore } from '../Root'

export const initializeToken = async (ctx: any) => {
  const token = Option.of(ctx)
    .flatMap(context => Option.of(context.req))
    .flatMap(request => Option.of(request.cookies))
    .flatMap(cookies => Option.of(cookies.token))
  if (token.nonEmpty()) {
    ;(ctx.store as IStore).user.setToken(token)
  }
}
